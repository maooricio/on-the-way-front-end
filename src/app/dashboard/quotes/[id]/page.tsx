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
import { FakeRequestsList, FakeUsersList } from "@/utils/data/fakers";

export interface IQuoteRequest {
  [key: string]: string;
}

export interface IDiscountData {
  discountVoucher: { type: string; amount: number };
}

const QuoteDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const requestSelected: IQuote | undefined = FakeRequestsList.find(
    (i) => i.id === id
  );
  const userSelected = FakeUsersList.find(
    (i) => i.id === requestSelected?.userId
  );

  const initialState: IQuoteRequest = {
    deliveryTransport: "",
    collectionTransport: "",
    comment: "",
    ...Object.fromEntries(
      requestSelected?.vehicles.map((v) => [v.id, ""]) || []
    ),
    ...Object.fromEntries(
      requestSelected?.operators.map((o) => [o.id, ""]) || []
    ),
  };

  const initialDiscount: IDiscountData = {
    discountVoucher: requestSelected
      ? requestSelected.discountVoucher
      : { type: "%", amount: 0 },
  };

  const [formData, setFormData] = useState<IQuoteRequest>(initialState);
  const [discountData, setDiscountData] =
    useState<IDiscountData>(initialDiscount);
  const [requestData, setRequestData] = useState<IQuote>(requestSelected!);
  const [showDiscountModal, setShowDiscountModal] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(Routes.quotes_history);
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
    setRequestData((prev) => ({
      ...prev,
      discountVoucher: discountData.discountVoucher,
    }));
  }, [discountData]);

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Detalle de cotización</h1>
      </header>

      <section className="new-quote-content">
        {requestData && (
          <form className="new-quote-form" onSubmit={handleOnSubmit}>
            <div className="new-quote-resume">
              {userSelected && (
                <div className="new-quote-resume-customer">
                  <div className="user-photo-container">
                    <Image
                      src={otw_logo}
                      alt="user photo"
                      className="user-photo"
                    />
                  </div>

                  <div className="new-quote-resume-customer-content">
                    <div className="new-quote-resume-customer-content-title">
                      <p>{userSelected.company}</p>
                      <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
                    </div>

                    <p>
                      Persona responsable: {userSelected.firstName}{" "}
                      {userSelected.lastName}
                    </p>
                  </div>
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

                    <p>{formatCurrency(250000)}</p>
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

                    <p>{formatCurrency(250000)}</p>
                  </div>
                </div>
              )}

              {requestData.vehicles.length > 0 &&
                requestData.vehicles.map((item) => (
                  <div key={item.id} className="new-quote-summary-item">
                    <div className="new-quote-summary-item-header">
                      <h1>Vehículo {item.name}</h1>
                      <span>{item.weight}</span>
                    </div>

                    <div className="new-quote-summary-item-handler">
                      <div>{item.amount.toString().padStart(2, "0")}</div>

                      <p>{formatCurrency(item.price * item.amount)}</p>
                    </div>
                  </div>
                ))}

              {requestData.operators.length > 0 &&
                requestData.operators.map((item) => (
                  <div key={item.id} className="new-quote-summary-item">
                    <div className="new-quote-summary-item-header">
                      <h1>{item.name}</h1>
                      <span>-</span>
                    </div>

                    <div className="new-quote-summary-item-handler">
                      <div>{item.amount.toString().padStart(2, "0")}</div>

                      <p>{formatCurrency(item.price * item.amount)}</p>
                    </div>
                  </div>
                ))}

              <InputElement
                type="textarea"
                label=""
                placeholder="Añade una nota o comentario para el cliente..."
                name="comment"
                setFormData={setFormData}
                error=""
                value={formData.comment}
                icon={<></>}
              />

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
              <button type="submit">Enviar cotización</button>
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
    </section>
  );
};

export default QuoteDetailsPage;
