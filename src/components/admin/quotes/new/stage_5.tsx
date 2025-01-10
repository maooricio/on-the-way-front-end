import { getStageIcon } from "@/utils/handlers/get_icon";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteStageFive = ({ setStage, formData, setFormData }: Props) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData((prev) => prev);
    setStage(4);
  };

  return (
    <section className="new-quote-content">
      <header className="new-quote-stages-container">
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, false)} alt="stage icon" />
        <span>Resumen</span>
      </header>

      <form className="new-quote-form" onSubmit={handleOnSubmit}>
        <footer className="new-quote-form-footer">
          <Link href={Routes.quotes} className="button">
            Cancelar cotización
          </Link>
          <Link href={Routes.quotes} className="button">
            Guardar en borradores
          </Link>
          <button type="submit" disabled={false}>
            Continuar
          </button>
        </footer>
      </form>
    </section>
  );
};

export default NewQuoteStageFive;
