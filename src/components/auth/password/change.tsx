import { FormEvent, useState } from "react";
import { INewPasswordFormData } from "../../../utils/interfaces/user.interface";
import {
  IError,
  initialFormError,
  newPasswordError,
} from "../../../utils/data/erros";
import InputElement from "../../inputs/input";
import { Routes } from "../../../utils/router/router_enum";
import arrow_left from "../../../assets/icons/arrow/arrow_left.svg";
import eye from "../../../assets/icons/utils/eye.svg";
import eye_closed from "../../../assets/icons/utils/eye_closed.svg";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const PasswordChange = () => {
  const initialState: INewPasswordFormData = {
    password: "",
    newPassword: "",
  };

  const [formData, setFormData] = useState<INewPasswordFormData>(initialState);
  const [formError, setFormError] = useState<IError>(initialFormError);
  const [showPassword, setShowPassword] = useState<string>("password");
  const [showNewPassword, setShowNewPassword] = useState<string>("password");

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, newPassword } = formData;

    if (password !== newPassword) {
      setFormError(newPasswordError);
      return;
    }

    redirect(Routes.login);
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
        type={showPassword}
        label="Nueva contraseña"
        placeholder="Ingresa tu nueva contraseña"
        name="password"
        setFormData={setFormData}
        error={formError.label}
        value={formData.password}
        icon={
          <Image
            src={showPassword === "text" ? eye_closed : eye}
            alt=""
            onClick={() =>
              setShowPassword(showPassword === "text" ? "password" : "text")
            }
          />
        }
      />

      <InputElement
        type={showNewPassword}
        label="Confirmar nueva contraseña"
        placeholder="Repite tu nueva contraseña"
        name="newPassword"
        setFormData={setFormData}
        error={formError.label}
        value={formData.newPassword}
        icon={
          <Image
            src={showNewPassword === "text" ? eye_closed : eye}
            alt=""
            onClick={() =>
              setShowNewPassword(
                showNewPassword === "text" ? "password" : "text",
              )
            }
          />
        }
      />

      {formError.value.length > 0 && (
        <span className="change-password-error">{formError.label}</span>
      )}

      <button type="submit">Restablecer contraseña</button>
    </form>
  );
};

export default PasswordChange;
