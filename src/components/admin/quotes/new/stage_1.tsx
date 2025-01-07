import { FakeUsersList } from "@/utils/data/fakers";
import { getStageIcon } from "@/utils/handlers/get_icon";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import Image from "next/image";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import SelectWithInput from "@/components/elements/inputs/select";
import close from "@/assets/icons/utils/close_fill.svg";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import { INewQuoteStageOneForm } from "@/utils/interfaces/new_quote.interface";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
}

const NewQuoteStageOne = ({ setStage }: Props) => {
  const initialState: INewQuoteStageOneForm = {
    customer: undefined,
    search: "",
  };

  const [formData, setFormData] = useState<INewQuoteStageOneForm>(initialState);
  const [customersOptions, setCustomersOptions] = useState<ISelectOption[]>([]);

  const getUsersOption = () => {
    const customersList = FakeUsersList.filter((i) => {
      const isCustomer = i.role === "customer";
      const hasSearchValue = formData.search.length > 0;
      const searchFilter = hasSearchValue
        ? i.company?.toLowerCase().includes(formData.search.toLowerCase())
        : false;

      if (hasSearchValue) {
        return isCustomer && searchFilter;
      }

      return isCustomer;
    });

    setCustomersOptions(
      customersList.map((i) => {
        const name = `${i.firstName} ${i.lastName}`;

        return {
          label: (
            <p className="new-quote-select-option">
              {i.company} <span>Responsable: {name}</span>
            </p>
          ),
          value: i.id!,
        };
      })
    );
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage(1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (payload: any) => {
    const filteredUser = FakeUsersList.find((i) => i.id === payload.value);

    setFormData({
      customer: filteredUser,
      search:
        typeof payload.label !== "string"
          ? filteredUser?.company
          : payload.label,
    });
  };

  useEffect(() => {
    getUsersOption();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.search]);

  return (
    <section className="new-quote-content">
      <header className="new-quote-stages-container">
        <Image src={getStageIcon(true, false)} alt="stage icon" />
        <span>Cliente</span>

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(false, false)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(false, false)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(false, false)} alt="stage icon" />
      </header>

      <form className="new-quote-form" onSubmit={handleOnSubmit}>
        {formData.customer ? (
          <div className="new-quote-form-customer">
            <div className="user-photo-container">
              <Image src={otw_logo} alt="user photo" className="user-photo" />
            </div>

            <div className="new-quote-form-customer-content">
              <div className="new-quote-form-customer-content-title">
                <p>{formData.customer.company}</p>
                <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
              </div>

              <p>Persona responsable: {formData.customer.name}</p>
            </div>

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
              setValue={handleOnSelect}
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
      </form>
    </section>
  );
};

export default NewQuoteStageOne;
