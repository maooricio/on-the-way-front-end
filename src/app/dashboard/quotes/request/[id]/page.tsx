"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IQuote } from "@/utils/interfaces/new_quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Link from "next/link";
import { formatCurrency, parseCurrency } from "@/utils/handlers/currency";
import AddDiscountVoucherModal from "@/components/admin/quotes/add_discount_voucher";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import ticket from "@/assets/icons/others/ticket.svg";
import InputElement from "@/components/elements/inputs/input";
import { FakeRequestsList, FakeUsersList } from "@/utils/data/fakers";

export interface IQuoteRequest {
  deliveryTransport: string;
  collectionTransport: string;
  comment: string;
}

const QuoteRequestDetailsPage = () => {
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
  };

  const [formData, setFormData] = useState<IQuoteRequest>(initialState);
  const [showDiscountModal, setShowDiscountModal] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const calculatePrice = () => {
    const deliveryPrice = parseCurrency(formData.deliveryTransport);

    let price = 0;

    if (!isNaN(deliveryPrice)) {
      price += deliveryPrice;
    }

    setPrice(price);
  };

  useEffect(() => {
    calculatePrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Detalle de solicitud</h1>
      </header>

      <section className="new-quote-content">
        {requestSelected && (
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

              {requestSelected.deliveryTransport && (
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
                      value={formData.deliveryTransport}
                      icon={<></>}
                    />
                  </div>
                </div>
              )}

              {requestSelected.collectionTransport && (
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
                      value={formData.deliveryTransport}
                      icon={<></>}
                    />
                  </div>
                </div>
              )}

              {requestSelected.vehicles.length > 0 &&
                requestSelected.vehicles.map((item) => (
                  <div key={item.id} className="new-quote-summary-item">
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
                        name="deliveryTransport"
                        setFormData={setFormData}
                        error=""
                        value={formData.deliveryTransport}
                        icon={<></>}
                      />
                    </div>
                  </div>
                ))}

              {requestSelected.operators.length > 0 &&
                requestSelected.operators.map((item) => (
                  <div key={item.id} className="new-quote-summary-item">
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
                        name="deliveryTransport"
                        setFormData={setFormData}
                        error=""
                        value={formData.deliveryTransport}
                        icon={<></>}
                      />
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
                {requestSelected.discountVoucher.amount === 0 ? (
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
                      setFormData((prev) => ({
                        ...prev,
                        discountVoucher: { type: "%", amount: 0 },
                      }))
                    }
                    className="discount-button delete-button"
                  >
                    Eliminar cupón de descuento
                  </button>
                )}

                {requestSelected.discountVoucher.amount === 0 ? (
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
                        {requestSelected.discountVoucher.type === "%"
                          ? `${requestSelected.discountVoucher.amount}%`
                          : formatCurrency(
                              requestSelected.discountVoucher.amount
                            )}
                      </span>
                    </p>
                    <p>
                      <span>Total:</span>{" "}
                      <span>
                        {formatCurrency(
                          requestSelected.discountVoucher.type === "%"
                            ? price -
                                price *
                                  (requestSelected.discountVoucher.amount / 100)
                            : price - requestSelected.discountVoucher.amount
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
          setFormData={setFormData}
        />
      )}
    </section>
  );
};

export default QuoteRequestDetailsPage;
