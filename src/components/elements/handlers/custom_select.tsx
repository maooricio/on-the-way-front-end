/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import SelectOptions from "./select_container";
import arrow from "@/assets/icons/arrow/select_down.svg";
import Image from "next/image";
import { ISelectOption } from "@/utils/interfaces/select.interface";
import { quotesFilterOptions } from "@/utils/data/quotes";

interface Props {
  labelName?: string;
  options: ISelectOption[];
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  disabled?: boolean;
}

function CustomSelect({
  labelName,
  options,
  setValue,
  value,
  disabled,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>(
    typeof options[0].label === "string" ? options[0].label : ""
  );
  const isPlaceholder = options[0].value.length === 0 && value.length === 0;

  const onSelectOption = (payload: any) => {
    if (payload.disabled) return;

    setValue(payload.value);
    setOptionSelected(payload.label);
    setShowOptions(false);
  };

  const updateOptionSelected = () => {
    const selected = quotesFilterOptions.find((i) => i.value === value);

    if (typeof selected?.label === "string") setOptionSelected(selected.label);
  };

  useEffect(() => {
    updateOptionSelected();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const isOpen =
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node);

      if (isOpen) setShowOptions(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <section className="custom-select-container">
      {labelName !== "" && (
        <span className="custom-select-label">{labelName}</span>
      )}

      <div className="custom-select" ref={wrapperRef}>
        <div
          className={`custom-select-content-container ${
            showOptions && "input-focused"
          } ${isPlaceholder && "is-placeholder"}`}
          onClick={(e) => {
            e.stopPropagation();
            if (disabled) return;
            setShowOptions((prev) => !prev);
          }}
        >
          <div className="custom-select-content">{optionSelected}</div>
          <Image
            src={arrow}
            alt="arrow icon"
            className={`${showOptions ? "rotate" : ""}`}
          />
        </div>

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

export default CustomSelect;
