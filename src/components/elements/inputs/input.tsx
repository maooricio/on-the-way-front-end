import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  ILoginFormData,
  INewPasswordFormData,
  IPasswordFormData,
  IUser,
} from "../../../utils/interfaces/user.interface";
import { IPassword } from "../../admin/settings/password_modal";
import { ISearch } from "@/app/dashboard/users/page";
import {
  INewQuoteStageOneForm,
  INewQuoteStageTwoForm,
} from "@/utils/interfaces/new_quote.interface";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  setFormData: SetFormDataActions;
  error: string;
  value: string;
  icon: ReactNode;
  disabled?: boolean;
  showError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputElement = ({
  type,
  label,
  placeholder,
  name,
  setFormData,
  error,
  value,
  icon,
  disabled,
  showError,
  onFocus,
  onBlur,
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <label className="input-container">
      {label.length > 0 && <span className="input-label">{label}</span>}

      <div
        className={`input ${isFocused && "focused-input"} ${
          error.length > 0 && "input-has-error"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {icon}
      </div>

      {showError && error.length > 0 && (
        <span className="input-error">{error}</span>
      )}
    </label>
  );
};

export default InputElement;

type SetFormDataActions =
  | Dispatch<SetStateAction<ILoginFormData>>
  | Dispatch<SetStateAction<IPasswordFormData>>
  | Dispatch<SetStateAction<INewPasswordFormData>>
  | Dispatch<SetStateAction<IPassword>>
  | Dispatch<SetStateAction<ISearch>>
  | Dispatch<SetStateAction<INewQuoteStageOneForm>>
  | Dispatch<SetStateAction<INewQuoteStageTwoForm>>
  | Dispatch<SetStateAction<IUser>>;
