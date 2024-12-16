import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { ILoginFormData } from "../../layouts/auth/login";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  setFormData: Dispatch<SetStateAction<ILoginFormData>>;
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
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <label className={`input-container`}>
      <span className="input-label">{label}</span>

      <div className="input">
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

      {error.length > 0 && <span className="input-error">{error}</span>}
    </label>
  );
};

export default InputElement;
