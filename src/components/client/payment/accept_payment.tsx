import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/utils/router/router_enum";

export interface IQuoteName {
  name: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const AcceptedPaymentModal = ({ setShowModal }: Props) => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`${Routes.quotes_history}?state=pending`);
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Pago exitoso</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>¡El pago de la factura se ha procesado exitosamente!</p>
        </div>

        <div className="generic-modal-buttons">
          <button
            type="button"
            onClick={() => router.push(`${Routes.quotes}/asdfasdfasdq5`)}
          >
            Aceptar
          </button>
          <button type="submit">Volver a cotizaciones pendientes</button>
        </div>
      </form>
    </section>
  );
};

export default AcceptedPaymentModal;
