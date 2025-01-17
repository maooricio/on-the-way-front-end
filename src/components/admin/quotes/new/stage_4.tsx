import SelectWithInput from "@/components/elements/inputs/select";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import Link from "next/link";
import { getStageIcon } from "@/utils/handlers/get_icon";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  ICustomerSelect,
  IQuote,
} from "@/utils/interfaces/quote.interface";
import { operatorsOptions } from "@/utils/data/jobs";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import close from "@/assets/icons/utils/close_fill.svg";
import { IOperator } from "@/utils/interfaces/operator.interface";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  formData: IQuote;
  setFormData: Dispatch<SetStateAction<IQuote>>;
}

const NewQuoteStageFour = ({ setStage, formData, setFormData }: Props) => {
  const initialState: ICustomerSelect = {
    selected: undefined,
    search: "",
  };

  const [selectData, setSelectData] =
    useState<ICustomerSelect>(initialState);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData((prev) => prev);
    setStage(4);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (item: any) => {
    const filteredOperator = operatorsOptions.find((i) => i.id === item.value);

    // setOperatorsSelected((prev) => [...prev, filteredOperator!]);
    setFormData((prev) => ({
      ...prev,
      operators: [...formData.operators, filteredOperator!],
    }));
    setSelectData({
      selected: undefined,
      search: "",
    });
  };

  const removeOperator = (operator: IOperator) => {
    const filteredOperators = formData.operators.filter(
      (i) => i.id !== operator.id
    );

    setFormData((prev) => ({ ...prev, operators: filteredOperators }));
    // setOperatorsSelected(filteredOperators);
  };

  const getOperatorOptions = (): ISelectOption[] => {
    const filteredOperators = operatorsOptions.filter((i) => {
      const findedOperator = formData.operators.find(
        (item) => item.id === i.id
      );

      return !findedOperator;
    });

    if (selectData.search.length > 0) {
      const searchedOperators = filteredOperators.filter((i) =>
        i.name.toLowerCase().includes(selectData.search)
      );

      return searchedOperators.map((i) => ({ label: i.name, value: i.id }));
    }

    return filteredOperators.map((i) => ({ label: i.name, value: i.id }));
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
        <div className="new-quote-form-content new-quote-operator">
          <p>Busca el tipo de operarios que necesita:</p>

          <SelectWithInput
            options={getOperatorOptions()}
            setValue={handleOnSelect}
            setSearchValue={setSelectData}
            value={selectData.search}
            placeholder="Buscar operario..."
          />
        </div>

        <div className="new-quote-form-content operators-selected-container">
          {formData.operators.length > 0 &&
            formData.operators.map((i) => (
              <span key={i.id} className="operator-selected-container">
                {i.name}{" "}
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
          <button type="submit" disabled={formData.operators.length === 0}>
            Continuar
          </button>
        </footer>
      </form>
    </section>
  );
};

export default NewQuoteStageFour;
