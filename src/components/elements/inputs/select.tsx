/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useRef, useState } from "react";
import SelectOptions from "../handlers/select_container";
import search from "@/assets/icons/others/glass.svg";
import Image from "next/image";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import InputElement from "./input";
import { ICustomerForm } from "@/app/dashboard/quotes/new/page";
import { FakeUsersList } from "@/utils/data/fakers";

interface Props {
  labelName?: string;
  options: ISelectOption[];
  setValue: Dispatch<SetStateAction<ICustomerForm>>;
  value: string;
  disabled?: boolean;
}

function SelectWithInput({
  labelName,
  options,
  setValue,
  value,
  disabled,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onSelectOption = (payload: any) => {
    if (payload.disabled) return;
    const filteredUser = FakeUsersList.find((i) => i.id === payload.value);

    setValue({
      customer: filteredUser,
      search: payload.label,
    });
    setShowOptions(false);
  };

  return (
    <section className="custom-select-container">
      {labelName !== "" && <span>{labelName}</span>}

      <div className="custom-select" ref={wrapperRef}>
        <InputElement
          type="text"
          label=""
          placeholder="Busca un cliente..."
          name="search"
          setFormData={setValue}
          error=""
          value={value}
          icon={<Image src={search} alt="search icon" />}
          disabled={disabled}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 100)}
        />

        {showOptions && (
          <SelectOptions
            onSelectOption={onSelectOption}
            options={options}
            valueSelected={value}
          />
        )}
      </div>
    </section>
  );
}

export default SelectWithInput;
