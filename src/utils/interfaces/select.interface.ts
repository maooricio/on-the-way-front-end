import { JSX } from "react";

export interface ISelectOption {
    iconImg?: string;
    label: string | JSX.Element;
    value: string;
    disabled?: boolean;
}