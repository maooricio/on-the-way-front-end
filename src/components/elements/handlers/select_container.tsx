/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISelectOption } from "@/utils/interfaces/select.interface";
import Image from "next/image";
import { MouseEvent } from "react";

interface Props {
  onSelectOption: (arg: any) => void;
  options: ISelectOption[];
  valueSelected: string;
}

const SelectOptions = ({ onSelectOption, options, valueSelected }: Props) => {
  const handleOptionOnClick = (
    e: MouseEvent<HTMLLIElement>,
    option: ISelectOption
  ) => {
    e.stopPropagation();

    if (option.value === valueSelected) return;

    onSelectOption(option);
  };

  return (
    <ul className="custom-select-options-container">
      {options.map((option) => (
        <li
          className={`custom-select-option`}
          key={option.value}
          data-is-selected={option.value == valueSelected || option.disabled}
          onMouseDown={(e) => handleOptionOnClick(e, option)}
        >
          <div className="select-option-content">
            {option.iconImg && (
              <Image
                src={option.iconImg}
                alt="option selected icon"
                className="icon"
              />
            )}
            {option.label}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SelectOptions;
