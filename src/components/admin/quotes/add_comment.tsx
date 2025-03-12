import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import InputElement from "@/components/elements/inputs/input";
import { IComment } from "./new/stage_5";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
}

const AddCommentModal = ({ setShowModal, quote }: Props) => {
  const initialState: IComment = {
    comment: "",
  };
  const [formData, setFormData] = useState<IComment>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(quote);
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
          <h1>Añadir un comentario</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>Añade un comentario a la cotización:</p>

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
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button type="submit" disabled={formData.comment.length === 0}>
            Añadir comentario
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddCommentModal;
