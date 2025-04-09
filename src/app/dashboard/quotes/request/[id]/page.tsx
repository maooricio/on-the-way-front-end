"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Link from "next/link";
import { formatCurrency } from "@/utils/handlers/currency";
import AddDiscountVoucherModal from "@/components/admin/quotes/add_discount_voucher";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import ticket from "@/assets/icons/others/ticket.svg";
import InputElement from "@/components/elements/inputs/input";
import { filterDate } from "@/utils/handlers/filters";
import { editQuote, getQuoteDetails } from "@/utils/api/quotes";
import { IVehicles } from "@/utils/interfaces/vehicles.interface";
import { IOperator } from "@/utils/interfaces/operator.interface";
import Loader from "@/assets/images/loader";

export interface IQuoteRequest {
  [key: string]: string;
}

export interface IDiscountData {
  discountVoucher: { type: string; amount: number };
}

const QuoteRequestDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const initialFormDataState: IQuoteRequest = {
    userId: "",
    deliveryTransport: "",
    collectionTransport: "",
  };

  const initialDiscountState: IDiscountData = {
    discountVoucher: { type: "%", amount: 0 },
  };

  const [formData, setFormData] = useState<IQuoteRequest>(initialFormDataState);
  const [requestData, setRequestData] = useState<IQuote | undefined>();
  const [discountData, setDiscountData] =
    useState<IDiscountData>(initialDiscountState);
  const [showDiscountModal, setShowDiscountModal] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await editQuote(requestData?._id ?? "", {
        state: "in_progress",
        isRequest: false,
        totalPrice: price,
        discountVoucher: discountData.discountVoucher,
      });

      if (res.data.data) {
        router.push(Routes.quotes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuoteDetails = async () => {
    try {
      const res = await getQuoteDetails(id!);

      if (res.data.data) {
        const quoteData = res.data.data;
        setFormData({
          userId: "",
          deliveryTransport: "",
          collectionTransport: "",
          ...Object.fromEntries(
            quoteData.vehicles.map((v: IVehicles) => [v.imageId, ""]) || []
          ),
          ...Object.fromEntries(
            quoteData.operators.map((o: IOperator) => [o.id, ""]) || []
          ),
        });
        setRequestData(quoteData);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const calculatePrice = () => {
    let price = 0;

    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const elementValue = Number(formData[key]);

        if (!isNaN(elementValue)) {
          price += elementValue;
        }
      }
    }

    setPrice(price);
  };

  useEffect(() => {
    calculatePrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    setRequestData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        discountVoucher: discountData.discountVoucher,
      };
    });
  }, [discountData]);

  useEffect(() => {
    fetchQuoteDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Detalle de solicitud</h1>
      </header>

      <section className="new-quote-content">
        {requestData && (
          <form
            className="new-quote-form quote-request-form"
            onSubmit={handleOnSubmit}
          >
            <div className="new-quote-resume">
              {requestData.user && (
                <div className="new-quote-resume-customer">
                  <div className="new-quote-resume-customer-info">
                    <div className="user-photo-container">
                      <Image
                        src={otw_logo}
                        alt="user photo"
                        className="user-photo"
                      />
                    </div>

                    <div className="new-quote-resume-customer-content">
                      <div className="new-quote-resume-customer-content-title">
                        <p>{requestData.user.companyName}</p>
                        <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
                      </div>

                      <p>
                        Persona responsable: {requestData.user.firstName}{" "}
                        {requestData.user.lastName}
                      </p>
                    </div>
                  </div>

                  {requestData.comment.length > 0 && (
                    <ul className="new-quote-request-comments">
                      {requestData.comment.map((i) => (
                        <li key={`${i.userId}: ${i._id}`}>
                          <div className="new-quote-request-comments-header">
                            <div className="user-photo-container">
                              <Image
                                src={otw_logo}
                                alt="user photo"
                                className="user-photo"
                              />
                            </div>
                            <h3>Comentario</h3>
                            <span>{filterDate(i.createdAt)}</span>
                          </div>

                          <p>{i.comment}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {requestData.deliveryTransport && (
                <div className="new-quote-summary-item">
                  <div className="new-quote-summary-item-header">
                    <h1>Transporte de entrega</h1>
                    <span>25/05/2024 a las 23:00 h.</span>
                  </div>

                  <div className="new-quote-summary-item-handler">
                    <div>{"1".padStart(2, "0")}</div>

                    <InputElement
                      type="text"
                      label=""
                      placeholder="$00,00"
                      name="deliveryTransport"
                      setFormData={setFormData}
                      error=""
                      value={
                        typeof formData.deliveryTransport === "string"
                          ? formData.deliveryTransport
                          : ""
                      }
                      icon={<></>}
                    />
                  </div>
                </div>
              )}

              {requestData.collectionTransport && (
                <div className="new-quote-summary-item">
                  <div className="new-quote-summary-item-header">
                    <h1>Transporte de recogida</h1>
                    <span>28/05/2024 a las 09:00 h.</span>
                  </div>

                  <div className="new-quote-summary-item-handler">
                    <div>{"1".padStart(2, "0")}</div>

                    <InputElement
                      type="text"
                      label=""
                      placeholder="$00,00"
                      name="deliveryTransport"
                      setFormData={setFormData}
                      error=""
                      value={
                        typeof formData.deliveryTransport === "string"
                          ? formData.deliveryTransport
                          : ""
                      }
                      icon={<></>}
                    />
                  </div>
                </div>
              )}

              {requestData.vehicles.length > 0 &&
                requestData.vehicles.map((item) => (
                  <div
                    key={`${item.name}: ${item._id}`}
                    className="new-quote-summary-item"
                  >
                    <div className="new-quote-summary-item-header">
                      <h1>Vehículo {item.name}</h1>
                      <span>{item.weight}</span>
                    </div>

                    <div className="new-quote-summary-item-handler">
                      <div>{item.amount.toString().padStart(2, "0")}</div>

                      <InputElement
                        type="text"
                        label=""
                        placeholder="$00,00"
                        name={item.imageId}
                        setFormData={setFormData}
                        error=""
                        value={formData[item.imageId] || ""}
                        icon={<></>}
                      />
                    </div>
                  </div>
                ))}

              {requestData.operators.length > 0 &&
                requestData.operators.map((item) => (
                  <div
                    key={`${item.name}: ${item._id}`}
                    className="new-quote-summary-item"
                  >
                    <div className="new-quote-summary-item-header">
                      <h1>{item.name}</h1>
                      <span>-</span>
                    </div>

                    <div className="new-quote-summary-item-handler">
                      <div>{item.amount.toString().padStart(2, "0")}</div>

                      <InputElement
                        type="text"
                        label=""
                        placeholder="$00,00"
                        name={item.id}
                        setFormData={setFormData}
                        error=""
                        value={formData[item.id] || ""}
                        icon={<></>}
                      />
                    </div>
                  </div>
                ))}

              <div className="new-quote-resume-footer">
                {requestData.discountVoucher.amount === 0 ? (
                  <button
                    type="button"
                    onClick={() => setShowDiscountModal(true)}
                    className="discount-button"
                  >
                    <Image src={ticket} alt="ticket icon" />
                    Aplicar cupón de descuento
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setDiscountData({
                        discountVoucher: { type: "%", amount: 0 },
                      })
                    }
                    className="discount-button delete-button"
                  >
                    Eliminar cupón de descuento
                  </button>
                )}

                {requestData.discountVoucher.amount === 0 ? (
                  <p>
                    <span>Total:</span> <span>{formatCurrency(price)}</span>
                  </p>
                ) : (
                  <div className="new-quote-summary-with-discount">
                    <p>
                      <span>Subtotal:</span>{" "}
                      <span className="text-regular">
                        {formatCurrency(price)}
                      </span>
                    </p>
                    <p>
                      <span>Descuento:</span>{" "}
                      <span className="text-regular">
                        {requestData.discountVoucher.type === "%"
                          ? `${requestData.discountVoucher.amount}%`
                          : formatCurrency(requestData.discountVoucher.amount)}
                      </span>
                    </p>
                    <p>
                      <span>Total:</span>{" "}
                      <span>
                        {formatCurrency(
                          requestData.discountVoucher.type === "%"
                            ? price -
                                price *
                                  (requestData.discountVoucher.amount / 100)
                            : price - requestData.discountVoucher.amount
                        )}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <footer className="new-quote-form-footer">
              <Link href={Routes.quotes} className="button">
                Cancelar
              </Link>
              <button type="submit">Editar cotización</button>
            </footer>
          </form>
        )}
      </section>

      {showDiscountModal && (
        <AddDiscountVoucherModal
          setShowModal={setShowDiscountModal}
          setFormData={setDiscountData}
        />
      )}

      {isLoading && <Loader />}
    </section>
  );
};

export default QuoteRequestDetailsPage;
