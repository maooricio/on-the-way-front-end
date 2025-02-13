import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import InputElement from "@/components/elements/inputs/input";

export interface IQuoteName {
  name: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
  setQuoteData: Dispatch<SetStateAction<IQuote | undefined>>;
}

const ChangeQuoteNameModal = ({ setShowModal, quote, setQuoteData }: Props) => {
  const initialState: IQuoteName = {
    name: quote?.name ? quote.name : "",
  };
  const [formData, setFormData] = useState<IQuoteName>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (quote) setQuoteData({ ...quote, name: formData.name });
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
          <h1>Cambiar nombre / referencia</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>
            Recuerda que solo tú podrás verlo, y funciona para organizar y
            encontrar fácilmente la cotización en tu lista.
          </p>

          <InputElement
            type="text"
            label=""
            placeholder="Añade una nota o comentario para el cliente..."
            name="name"
            setFormData={setFormData}
            error=""
            value={formData.name}
            icon={<></>}
          />
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button
            type="submit"
            disabled={
              quote?.name === formData.name || formData.name.length === 0
            }
          >
            Cambiar nombre
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChangeQuoteNameModal;
