import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IQuote } from "@/utils/interfaces/quote.interface";
import InputElement from "@/components/elements/inputs/input";
import { IComment } from "./new/stage_5";
import { addComment } from "@/utils/api/quotes";
import Loader from "@/assets/images/loader";
import { IUserLogged } from "@/utils/interfaces/user.interface";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  quote: IQuote | undefined;
  user: IUserLogged | undefined;
  refreshQuote: () => Promise<void>;
}

const AddCommentModal = ({ setShowModal, quote, user, refreshQuote }: Props) => {
  const initialState: IComment = {
    comment: "",
  };
  const [formData, setFormData] = useState<IComment>(initialState);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await addComment(
        quote?._id ?? "",
        formData.comment,
        user?.id ?? ""
      );

      if (!res.data.data) {
        setError("Error al añadir el comentario");
        return;
      }

      await refreshQuote();
      setShowModal(false);
    } catch (error) {
      console.log(error);
      setError("Error al añadir el comentario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit} onChange={() => setError("")}>
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
            error={error}
            value={formData.comment}
            icon={<></>}
            showError={error.length > 0}
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

      {isLoading && <Loader />}
    </section>
  );
};

export default AddCommentModal;
