import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { FakeUsersList } from "@/utils/data/fakers";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
  setQuoteData: Dispatch<SetStateAction<IQuote | undefined>>;
}

const CancelQuoteModal = ({ setShowModal, quote, setQuoteData }: Props) => {
  const quoteUser = FakeUsersList.find((i) => i.id === quote?.userId);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (quote) {
      setQuoteData({
        ...quote,
        state: "Cancelada",
      });
    }

    setShowModal(false);
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Cancelar cotización</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>¿Estás seguro que deseas cancelar la siguiente cotización?</p>

          <div className="cancel-quote-info">
            <h3>{quoteUser?.company}</h3>
            <p>
              Cotización {quote?.quoteNumber} <span>{quote?.date}</span>
            </p>
          </div>
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Conservar cotización
          </button>
          <button type="submit">Sí, cancelar cotización</button>
        </div>
      </form>
    </section>
  );
};

export default CancelQuoteModal;
