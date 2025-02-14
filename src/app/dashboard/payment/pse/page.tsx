"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/handlers/currency";
import { FormEvent, useState } from "react";
import InputElement from "@/components/elements/inputs/input";
import { ICardData } from "@/utils/interfaces/payment.interface";
import AcceptedPaymentModal from "@/components/client/payment/accept_payment";

const PaymentPage = () => {
  const router = useRouter();

  const initialState: ICardData = {
    ownerName: "",
    ownerId: "",
    number: "",
    expiresAt: "",
    cvv: "",
  };

  const [formData, setFormData] = useState<ICardData>(initialState);
  const [showAcceptPayment, setShowAcceptPayment] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAcceptPayment(true);
  };

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Realizar pago</h1>
      </header>

      <section className="new-quote-content-container">
        <section className="new-quote-content">
          <form
            className="new-quote-form payment-form"
            onSubmit={handleOnSubmit}
          >
            <h3>Pagar con transferencia (PSE)</h3>

            <div className="new-quote-form-stage-two-content">
              <InputElement
                type="text"
                label="Nombre y apellido del titular de la tarjeta"
                placeholder="Ingresa el nombre y apellido"
                name="ownerName"
                setFormData={setFormData}
                error=""
                value={formData.ownerName}
                icon={<></>}
              />

              <InputElement
                type="text"
                label="DNI del titular de la tarjeta"
                placeholder="Ingresa el número sin puntos"
                name="ownerId"
                setFormData={setFormData}
                error=""
                value={formData.ownerId}
                icon={<></>}
              />

              <InputElement
                type="text"
                label="Número de tarjeta"
                placeholder="Ingresa el número"
                name="number"
                setFormData={setFormData}
                error=""
                value={formData.number}
                icon={<></>}
              />

              <div className="payment-form-row">
                <InputElement
                  type="text"
                  label="Fecha de vencimiento"
                  placeholder="mm/aa"
                  name="expiresAt"
                  setFormData={setFormData}
                  error=""
                  value={formData.expiresAt}
                  icon={<></>}
                />

                <InputElement
                  type="text"
                  label="CVV"
                  placeholder="Ingresa el código de serguridad"
                  name="cvv"
                  setFormData={setFormData}
                  error=""
                  value={formData.cvv}
                  icon={<></>}
                />
              </div>
            </div>

            <footer className="new-quote-form-footer">
              <button type="button" onClick={() => router.back()}>
                Regresar
              </button>
              <button
                type="submit"
                disabled={
                  formData.ownerName.length === 0 ||
                  formData.ownerId.length === 0 ||
                  formData.number.length === 0 ||
                  formData.expiresAt.length === 0 ||
                  formData.cvv.length === 0
                }
              >
                Realizar pago
              </button>
            </footer>
          </form>
        </section>

        <section className="new-quote-summary-container">
          <h2>Resumen de cotización</h2>

          <p>
            <span>Subtotal:</span>{" "}
            <span style={{ fontWeight: 600 }}>{formatCurrency(912000)}</span>
          </p>

          <p>
            <span>Descuento:</span>{" "}
            <span style={{ fontWeight: 600 }}>{formatCurrency(10000)}</span>
          </p>

          <p>
            <span>Total:</span>{" "}
            <span style={{ fontWeight: 600 }}>{formatCurrency(902000)}</span>
          </p>
        </section>
      </section>

      {showAcceptPayment && (
        <AcceptedPaymentModal setShowModal={setShowAcceptPayment} />
      )}
    </section>
  );
};

export default PaymentPage;
