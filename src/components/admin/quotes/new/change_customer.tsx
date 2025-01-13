import Image from "next/image";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import close from "@/assets/icons/utils/close.svg";
import close_fill from "@/assets/icons/utils/close_fill.svg";
import SelectWithInput from "@/components/elements/inputs/select";
import {
  INewQuoteStageOneForm,
  INewQuoteStageTwoForm,
} from "@/utils/interfaces/new_quote.interface";
import { FakeUsersList } from "@/utils/data/fakers";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import otw_logo from "@/assets/images/otw_only_logo.svg";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setFormQuoteData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const ChangeCustomerModal = ({ setShowModal, setFormQuoteData }: Props) => {
  const initialState: INewQuoteStageOneForm = {
    selected: undefined,
    search: "",
  };

  const [formData, setFormData] = useState<INewQuoteStageOneForm>(initialState);
  const [customersOptions, setCustomersOptions] = useState<ISelectOption[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.selected) {
      setFormQuoteData((prev) => ({ ...prev, userId: formData.selected?.id }));
    }

    setShowModal(false);
  };

  const getUsersOption = () => {
    const customersList = FakeUsersList.filter((i) => {
      const isCustomer = i.role === "customer";
      const hasSearchValue = formData.search?.length > 0;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (item: any) => {
    const filteredUser = FakeUsersList.find((i) => i.id === item.value);

    setFormData({
      selected: filteredUser,
      search:
        typeof item.label !== "string" ? filteredUser?.company : item.label,
    });
  };

  useEffect(() => {
    getUsersOption();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.search]);

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Cambiar cliente</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>Busca el cliente al que deseas enviar la cotización:</p>

          {formData.selected ? (
            <div className="new-quote-form-customer">
              <div className="user-photo-container">
                <Image src={otw_logo} alt="user photo" className="user-photo" />
              </div>

              <div className="new-quote-form-customer-content">
                <div className="new-quote-form-customer-content-title">
                  <p>{formData.selected.company}</p>
                  <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
                </div>

                <p>
                  Persona responsable: {formData.selected.firstName}{" "}
                  {formData.selected.lastName}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormData(initialState);
                }}
              >
                <Image src={close_fill} alt="close button icon" />
              </button>
            </div>
          ) : (
            <SelectWithInput
              options={customersOptions}
              setValue={handleOnSelect}
              setSearchValue={setFormData}
              value={formData.search}
            />
          )}
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button type="submit">Cambiar cliente</button>
        </div>
      </form>
    </section>
  );
};

export default ChangeCustomerModal;
