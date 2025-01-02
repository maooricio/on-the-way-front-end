"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import { getStageIcon } from "@/utils/handlers/get_stage_icon";
import InputElement from "@/components/inputs/input";
import { IFakeUser } from "@/utils/data/fakers";
import { useState } from "react";
import search from "@/assets/icons/others/glass.svg";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";

export interface ICustomerForm {
  customer?: IFakeUser;
  search: string;
}

const NewQuotePage = () => {
  const router = useRouter();

  const initialState: ICustomerForm = {
    customer: undefined,
    search: "",
  };

  const [formData, setFormData] = useState<ICustomerForm>(initialState);

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Historial de cotizaciones</h1>
      </header>

      <section className="new-quote-content">
        <header className="new-quote-stages-container">
          <Image src={getStageIcon(true)} alt="stage icon" />
          <span>Cliente</span>

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false)} alt="stage icon" />
        </header>

        <section className="new-quote-form">
          <div className="new-quote-form-content">
            <InputElement
              type="text"
              label=""
              placeholder="Busca un cliente..."
              name="search"
              setFormData={setFormData}
              error=""
              value={formData.search}
              icon={<Image src={search} alt="search icon" />}
            />
            <button type="button">O añade uno nuevo</button>
          </div>

          <footer className="new-quote-form-footer">
            <Link href={Routes.quotes} className="button">
              Cancelar cotización
            </Link>
            <button type="submit">Continuar</button>
          </footer>
        </section>
      </section>
    </section>
  );
};

export default NewQuotePage;
