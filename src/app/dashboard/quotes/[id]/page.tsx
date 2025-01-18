"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Link from "next/link";
import { formatCurrency } from "@/utils/handlers/currency";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import { FakeRequestsList, FakeUsersList } from "@/utils/data/fakers";
import arrow_down from "@/assets/icons/arrow/select_down.svg";
import { getStateColor } from "@/utils/handlers/get_state_color";

export interface IQuoteRequest {
  [key: string]: string;
}

export interface IDiscountData {
  discountVoucher: { type: string; amount: number };
}

const QuoteDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const quoteData: IQuote | undefined = FakeRequestsList.find(
    (i) => i.id === id
  );
  const userSelected = FakeUsersList.find((i) => i.id === quoteData?.userId);

  const [showQuoteInfo, setShowQuoteInfo] = useState<boolean>(true);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace(Routes.quotes_history);
  };

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Detalle de cotización</h1>
      </header>

      <section className="new-quote-content">
        {quoteData && (
          <form
            className="new-quote-form quote-details-form"
            onSubmit={handleOnSubmit}
          >
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

            <div className="new-quote-resume">
              <div className="new-quote-resume-details">
                <div className="new-quote-resume-details-row">
                  <p>
                    Cotización {quoteData.quoteNumber}{" "}
                    <span>{quoteData.date}</span>
                  </p>
                  <span
                    className="quote-state"
                    style={{
                      backgroundColor: getStateColor(quoteData.state ?? ""),
                    }}
                  >
                    {quoteData.state}
                  </span>
                </div>

                <div className="new-quote-resume-details-row">
                  <p className="admin-name">
                    Cotizado por: {"Mariano Nahuel Duarte"}
                  </p>

                  <span>{formatCurrency(quoteData.totalPrice)}</span>
                </div>

                <div className="new-quote-resume-details-row">
                  <p className="comments-lenght">
                    {quoteData.comment.length} Comentario
                    {quoteData.comment.length > 1 && "s"}
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowQuoteInfo(!showQuoteInfo)}
                  >
                    <Image
                      src={arrow_down}
                      alt="arrow down"
                      className={!showQuoteInfo ? "rotate" : ""}
                    />
                  </button>
                </div>
              </div>

              {quoteData.deliveryTransport && showQuoteInfo && (
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

              {quoteData.collectionTransport && showQuoteInfo && (
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

              {quoteData.vehicles.length > 0 &&
                showQuoteInfo &&
                quoteData.vehicles.map((item) => (
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

              {quoteData.operators.length > 0 &&
                showQuoteInfo &&
                quoteData.operators.map((item) => (
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

              {/* <InputElement
                type="textarea"
                label=""
                placeholder="Añade una nota o comentario para el cliente..."
                name="comment"
                setFormData={setFormData}
                error=""
                value={formData.comment}
                icon={<></>}
              /> */}

              {showQuoteInfo && (
                <div className="new-quote-resume-footer">
                  {quoteData.discountVoucher.amount === 0 ? (
                    <p>
                      <span>Total:</span> <span>{formatCurrency(0)}</span>
                    </p>
                  ) : (
                    <div className="new-quote-summary-with-discount">
                      <p>
                        <span>Subtotal:</span>{" "}
                        <span className="text-regular">
                          {formatCurrency(0)}
                        </span>
                      </p>
                      <p>
                        <span>Descuento:</span>{" "}
                        <span className="text-regular">
                          {quoteData.discountVoucher.type === "%"
                            ? `${quoteData.discountVoucher.amount}%`
                            : formatCurrency(quoteData.discountVoucher.amount)}
                        </span>
                      </p>
                      <p>
                        <span>Total:</span>{" "}
                        <span>
                          {formatCurrency(
                            quoteData.discountVoucher.type === "%"
                              ? 0 - 0 * (quoteData.discountVoucher.amount / 100)
                              : 0 - quoteData.discountVoucher.amount
                          )}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {quoteData.comment.length > 0 && (
                <ul className="new-quote-request-comments">
                  {quoteData.comment.map((i) => {
                    const commentUser = FakeUsersList.find(
                      (u) => u.id === i.userId
                    );

                    return (
                      <li key={`${i.userId}: ${i.date}`}>
                        <div className="new-quote-request-comments-header">
                          <div className="user-photo-container">
                            <Image
                              src={otw_logo}
                              alt="user photo"
                              className="user-photo"
                            />
                          </div>
                          <h3>
                            {commentUser?.firstName} {commentUser?.lastName}
                          </h3>
                          <span>{i.date}</span>
                        </div>

                        <p>{i.comment}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
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
    </section>
  );
};

export default QuoteDetailsPage;
