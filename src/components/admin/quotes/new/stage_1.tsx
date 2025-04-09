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
import { ICustomerSelect, IQuote } from "@/utils/interfaces/quote.interface";
import { getCustomers } from "@/utils/api/users";
import { IUser } from "@/utils/interfaces/user.interface";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  setFormQuoteData: Dispatch<SetStateAction<IQuote>>;
  formQuoteData: IQuote;
}

const NewQuoteStageOne = ({
  setStage,
  setFormQuoteData,
  formQuoteData,
}: Props) => {
  const initialState: ICustomerSelect = {
    selected: undefined,
    search: "",
  };

  const [formData, setFormData] = useState<ICustomerSelect>(initialState);
  const [customersOptions, setCustomersOptions] = useState<ISelectOption[]>([]);
  const [allCustomersList, setAllCustomersList] = useState<IUser[]>([]);

  const getUsersOption = async () => {
    try {
      const res = await getCustomers();

      if (!res.data.data) {
        return;
      }

      const responseData = res.data.data;

      setAllCustomersList(responseData);

      const customersList = responseData.filter((i: IUser) => {
        const hasSearchValue = formData.search?.length > 0;
        const searchFilter = hasSearchValue
          ? i.companyName?.toLowerCase().includes(formData.search.toLowerCase())
          : false;

        if (hasSearchValue) {
          return searchFilter;
        }

        return hasSearchValue ? searchFilter : true;
      });

      setCustomersOptions(
        customersList.map((i: IUser) => {
          const name = `${i.firstName} ${i.lastName}`;

          return {
            label: (
              <p className="new-quote-select-option">
                {i.companyName} <span>Responsable: {name}</span>
              </p>
            ),
            value: i.id!,
          };
        })
      );

      if (formQuoteData.userId) {
        setFormData((prev) => ({
          ...prev,
          selected: responseData.find(
            (i: IUser) => i.id === formQuoteData.userId
          ),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.selected) {
      const userSelectedId =
        typeof formData.selected !== "string"
          ? formData.selected.id
          : formData.selected;

      setFormQuoteData((prev) => ({ ...prev, userId: userSelectedId }));
    }

    setStage(1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (item: any) => {
    const filteredUser = allCustomersList.find((i) => i.id === item.value);

    setFormData({
      selected: filteredUser,
      search:
        typeof item.label !== "string" ? filteredUser?.companyName : item.label,
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

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(false, false)} alt="stage icon" />
      </header>

      <form className="new-quote-form" onSubmit={handleOnSubmit}>
        {formData.selected ? (
          <div className="new-quote-form-customer">
            <div className="user-photo-container">
              <Image src={otw_logo} alt="user photo" className="user-photo" />
            </div>

            <div className="new-quote-form-customer-content">
              <div className="new-quote-form-customer-content-title">
                <p>
                  {typeof formData.selected !== "string"
                    ? formData.selected.companyName
                    : ""}
                </p>
                <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
              </div>

              <p>
                Persona responsable:{" "}
                {typeof formData.selected !== "string"
                  ? formData.selected.firstName
                  : ""}{" "}
                {typeof formData.selected !== "string"
                  ? formData.selected.lastName
                  : ""}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setFormQuoteData((prev) => ({ ...prev, userId: "" }));
                setFormData(initialState);
              }}
            >
              <Image src={close} alt="close button icon" />
            </button>
          </div>
        ) : (
          <div className="new-quote-form-content">
            <SelectWithInput
              options={customersOptions}
              setValue={handleOnSelect}
              setSearchValue={setFormData}
              value={formData.search}
            />

            <button type="button">O añade uno nuevo</button>
          </div>
        )}

        <footer className="new-quote-form-footer">
          <Link href={Routes.quotes} className="button">
            Cancelar cotización
          </Link>
          <button type="submit" disabled={!formData.selected}>
            Continuar
          </button>
        </footer>
      </form>
    </section>
  );
};

export default NewQuoteStageOne;
