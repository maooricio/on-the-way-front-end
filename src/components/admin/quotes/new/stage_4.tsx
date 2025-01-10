import SelectWithInput from "@/components/elements/inputs/select";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import Link from "next/link";
import { getStageIcon } from "@/utils/handlers/get_icon";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  INewQuoteStageOneForm,
  INewQuoteStageTwoForm,
} from "@/utils/interfaces/new_quote.interface";
import { operatorsOptions } from "@/utils/data/jobs";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import close from "@/assets/icons/utils/close_fill.svg";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteStageFour = ({ setStage, formData, setFormData }: Props) => {
  const initialState: INewQuoteStageOneForm = {
    customer: undefined,
    search: "",
  };

  const [selectData, setSelectData] =
    useState<INewQuoteStageOneForm>(initialState);
  const [operatorsSelected, setOperatorsSelected] = useState<ISelectOption[]>(
    []
  );

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData((prev) => prev);
    setStage(4);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (payload: any) => {
    const filteredOperator = operatorsOptions.find(
      (i) => i.value === payload.value
    );

    setOperatorsSelected((prev) => [...prev, filteredOperator!]);
    setSelectData({
      customer: undefined,
      search:
        typeof payload.label !== "string"
          ? filteredOperator?.label
          : payload.label,
    });
  };

  const removeOperator = (operator: ISelectOption) => {
    const filteredOperators = operatorsSelected.filter(
      (i) => i.value !== operator.value
    );

    setOperatorsSelected(filteredOperators);
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
        <Image src={getStageIcon(true, false)} alt="stage icon" />
        <span>Operarios</span>

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(false, false)} alt="stage icon" />
      </header>

      <form className="new-quote-form" onSubmit={handleOnSubmit}>
        <div className="new-quote-form-content">
          <SelectWithInput
            options={operatorsOptions}
            setValue={handleOnSelect}
            value={selectData.search}
            placeholder="Buscar operario..."
          />
        </div>

        <div className="new-quote-form-content operators-selected-container">
          {operatorsSelected.length > 0 &&
            operatorsSelected.map((i) => (
              <span key={i.value} className="operator-selected-container">
                {i.label}{" "}
                <button type="button" onClick={() => removeOperator(i)}>
                  <Image src={close} alt="close icon" />
                </button>
              </span>
            ))}
        </div>

        <footer className="new-quote-form-footer">
          <Link href={Routes.quotes} className="button">
            Cancelar cotización
          </Link>
          <Link href={Routes.quotes} className="button">
            Guardar en borradores
          </Link>
          <button type="submit" disabled={operatorsSelected.length === 0}>
            Continuar
          </button>
        </footer>
      </form>
    </section>
  );
};

export default NewQuoteStageFour;
