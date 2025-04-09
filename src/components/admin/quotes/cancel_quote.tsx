import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { editQuote } from "@/utils/api/quotes";
import Loader from "@/assets/images/loader";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
  setQuoteData: Dispatch<SetStateAction<IQuote | undefined>>;
}

const CancelQuoteModal = ({ setShowModal, quote, setQuoteData }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await editQuote(quote?._id ?? "", {
        state: "canceled",
      });

      if (!res.data.data) {
        return;
      }

      if (quote) {
        setQuoteData({
          ...quote,
          state: "Cancelada",
        });
      }

      setShowModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
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
            <h3>{quote?.name}</h3>
            <p>
              Cotización {quote?.quoteNumber} <span>{quote?.date}</span>
            </p>
          </div>
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Conservar cotización
          </button>
          <button type="submit" className="delete-button">
            Sí, cancelar cotización
          </button>
        </div>
      </form>

      {isLoading && <Loader />}
    </section>
  );
};

export default CancelQuoteModal;
