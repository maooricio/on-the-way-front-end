import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IPasswordFormData } from "../../../utils/interfaces/user.interface";
import {
  IError,
  initialFormError,
  recoverPasswordError,
} from "../../../utils/data/erros";
import InputElement from "../../elements/inputs/input";
import { Routes } from "../../../utils/router/router_enum";
import arrow_left from "../../../assets/icons/arrow/arrow_left.svg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
}

const PasswordEmail = ({ setStage }: Props) => {
  const initialState: IPasswordFormData = {
    email: "",
  };

  const [formData, setFormData] = useState<IPasswordFormData>(initialState);
  const [formError, setFormError] = useState<IError>(initialFormError);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = formData;

    if (email.length === 0) {
      setFormError(recoverPasswordError);
      return;
    }

    setStage(1);
  };

  const handleOnChange = () => {
    setFormError(initialFormError);
  };

  return (
    <form
      className="auth-form"
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
    >
      <header className="password-header">
        <Link href={Routes.login} className="link">
          <Image src={arrow_left} alt="arrow left icon" />
        </Link>
        <h3>Restablecer contraseña</h3>
      </header>

      <p>
        Por favor ingresa tu correo electrónico donde te enviaremos un código
        para recuperar tu contraseña:
      </p>

      <InputElement
        type="text"
        label="Email"
        placeholder="Ingresa tu email"
        name="email"
        setFormData={setFormData}
        error={formError.label}
        value={formData.email}
        icon={<></>}
        showError={true}
      />

      <button type="submit">Restablecer contraseña</button>
    </form>
  );
};

export default PasswordEmail;
