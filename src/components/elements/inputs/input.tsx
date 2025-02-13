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
import { ICustomerSelect, IQuote } from "@/utils/interfaces/quote.interface";
import { IVoucherAmount } from "@/components/admin/quotes/add_discount_voucher";
import { IQuoteRequest } from "@/app/dashboard/quotes/request/[id]/page";
import { IComment } from "@/components/admin/quotes/new/stage_5";
import { IEditProfile } from "@/components/admin/settings/edit_profile";
import { IEditUser } from "@/components/admin/users/edit";
import { IQuoteName } from "@/components/client/quotes/change_name";
import { ICardData } from "@/utils/interfaces/payment.interface";

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

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        {type !== "textarea" ? (
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
        ) : (
          <textarea
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleOnChange}
          />
        )}

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
  | Dispatch<SetStateAction<ICustomerSelect>>
  | Dispatch<SetStateAction<IQuote>>
  | Dispatch<SetStateAction<IUser>>
  | Dispatch<SetStateAction<IVoucherAmount>>
  | Dispatch<SetStateAction<IQuoteRequest>>
  | Dispatch<SetStateAction<IComment>>
  | Dispatch<SetStateAction<IEditProfile>>
  | Dispatch<SetStateAction<IEditUser>>
  | Dispatch<SetStateAction<IQuoteName>>
  | Dispatch<SetStateAction<ICardData>>;
