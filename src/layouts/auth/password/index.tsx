import AuthContainer from "../../../containers/auth";
import arrow_left from "../../../assets/icons/arrow/arrow_left.svg";
import { Link } from "react-router-dom";
import { Routes } from "../../../utils/router/router_enum";
import InputElement from "../../../components/inputs/input";
import { FormEvent, useState } from "react";
import { IPasswordFormData } from "../../../utils/interfaces/user.interface";
import {
  IError,
  initialFormError,
  recoverPasswordError,
} from "../../../utils/data/erros";

const AuthPassword = () => {
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
  };

  const handleOnChange = () => {
    setFormError(initialFormError);
  };

  return (
    <AuthContainer>
      <section className="auth-form-container">
        <form
          className="auth-form"
          onClick={handleOnSubmit}
          onChange={handleOnChange}
        >
          <header className="password-header">
            <Link to={Routes.main} className="link">
              <img src={arrow_left} alt="arrow left icon" />
            </Link>
            <h3>Restablecer contraseña</h3>
          </header>

          <p>
            Por favor ingresa tu correo electrónico donde te enviaremos un
            código para recuperar tu contraseña:
          </p>

          <InputElement
            type="text"
            label="Email"
            placeholder="Ingresa tu email"
            name="email"
            setFormData={setFormData}
            error={""}
            value={formData.email}
            icon={<></>}
          />

          <button type="submit">Restablecer contraseña</button>
        </form>
      </section>
    </AuthContainer>
  );
};

export default AuthPassword;
