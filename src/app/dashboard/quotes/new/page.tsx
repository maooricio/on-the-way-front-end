"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import { getStageIcon } from "@/utils/handlers/get_stage_icon";
import { FakeUsersList, IFakeUser } from "@/utils/data/fakers";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import SelectWithInput from "@/components/elements/inputs/select";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import close from "@/assets/icons/utils/close_fill.svg";

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
  const [customersOptions, setCustomersOptions] = useState<ISelectOption[]>([]);

  const getUsersOption = () => {
    const customersList = FakeUsersList.filter((i) => {
      const isCustomer = i.role === "customer";
      const searchFilter = i.company
        .toLowerCase()
        .includes(formData.search.toLowerCase());

      if (formData.search.length > 0) {
        return isCustomer && searchFilter;
      }

      return isCustomer;
    });

    setCustomersOptions(
      customersList.map((i) => ({
        label: (
          <p className="new-quote-select-option">
            {i.company} <span>Responsable: {i.name}</span>
          </p>
        ),
        value: i.id,
      }))
    );
  };

  useEffect(() => {
    getUsersOption();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.search]);

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
          {formData.customer ? (
            <div className="new-quote-form-customer">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, customer: undefined }))
                }
              >
                <Image src={close} alt="close button icon" />
              </button>
            </div>
          ) : (
            <div className="new-quote-form-content">
              <SelectWithInput
                options={customersOptions}
                setValue={setFormData}
                value={formData.search}
              />

              <button type="button">O añade uno nuevo</button>
            </div>
          )}

          <footer className="new-quote-form-footer">
            <Link href={Routes.quotes} className="button">
              Cancelar cotización
            </Link>
            <button type="submit" disabled={!formData.customer}>
              Continuar
            </button>
          </footer>
        </section>
      </section>
    </section>
  );
};

export default NewQuotePage;
