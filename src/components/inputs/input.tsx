import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  ILoginFormData,
  IPasswordFormData,
} from "../../utils/interfaces/user.interface";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  setFormData:
    | Dispatch<SetStateAction<ILoginFormData>>
    | Dispatch<SetStateAction<IPasswordFormData>>;
  error: string;
  value: string;
  icon: ReactNode;
  disabled?: boolean;
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
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <label className={`input-container`}>
      <span className="input-label">{label}</span>

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
        />

        {icon}
      </div>

      {/* {error.length > 0 && <span className="input-error">{error}</span>} */}
    </label>
  );
};

export default InputElement;
