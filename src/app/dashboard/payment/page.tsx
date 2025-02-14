"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utils/handlers/currency";
import { Routes } from "@/utils/router/router_enum";
import { paymentOptions } from "@/utils/data/payment";
import { FormEvent, useState } from "react";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import circle_fill from "@/assets/icons/checkbox/circle_fill.svg";
import circle_empty from "@/assets/icons/checkbox/circle_empty.svg";

const PaymentPage = () => {
  const router = useRouter();

  const [paymentSelected, setPaymentSelected] = useState<ISelectOption>(
    paymentOptions[0],
  );

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(Routes.payment_card);
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
            <h3>Selecciona el método de pago</h3>

            <div className="new-quote-form-stage-two-content">
              {paymentOptions.map((i) => (
                <button
                  type="button"
                  key={i.value}
                  className="payment-option-container"
                  onClick={() => setPaymentSelected(i)}
                >
                  <Image
                    src={
                      i.value === paymentSelected?.value
                        ? circle_fill
                        : circle_empty
                    }
                    alt=""
                  />
                  <span>{i.label}</span>
                </button>
              ))}
            </div>

            <p className="payment-description">
              * El pago con tarjeta de crédito puede tener tarifas adicionales
              dependiendo de tu proveedor.
            </p>

            <footer className="new-quote-form-footer">
              <button type="submit">Continuar</button>
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
    </section>
  );
};

export default PaymentPage;
