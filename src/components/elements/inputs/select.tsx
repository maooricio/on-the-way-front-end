/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import SelectOptions from "../handlers/select_container";
import search from "@/assets/icons/others/glass.svg";
import Image from "next/image";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import InputElement from "./input";

interface Props {
  labelName?: string;
  options: ISelectOption[];
  setValue: (payload: any) => void;
  value: string;
  disabled?: boolean;
  placeholder?: string;
}

function SelectWithInput({
  labelName,
  options,
  setValue,
  value,
  disabled,
  placeholder,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onSelectOption = (payload: any) => {
    if (payload.disabled) return;

    setValue(payload);
    setShowOptions(false);
  };

  return (
    <section className="custom-select-container">
      <div className="custom-select" ref={wrapperRef}>
        <InputElement
          type="text"
          label={labelName ?? ""}
          placeholder={placeholder ?? "Busca un cliente..."}
          name="search"
          setFormData={setValue}
          error=""
          value={value ?? ""}
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
