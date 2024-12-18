import AuthContainer from "../../../containers/auth";
import otw_loco from "../../../assets/images/otw_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../../utils/router/router_enum";
import InputElement from "../../../components/inputs/input";
import { FormEvent, useState } from "react";
import eye from "../../../assets/icons/utils/eye.svg";
import eye_closed from "../../../assets/icons/utils/eye_closed.svg";
import { ILoginFormData } from "../../../utils/interfaces/user.interface";
import { userLogin } from "../../../utils/handlers/user_login";
import {
  emptyUserError,
  IError,
  initialFormError,
} from "../../../utils/data/erros";

const AuthLogin = () => {
  const navigate = useNavigate();

  const initialState: ILoginFormData = {
    user: "",
    password: "",
  };

  const [formData, setFormData] = useState<ILoginFormData>(initialState);
  const [showPassword, setShowPassword] = useState<string>("password");
  const [formError, setFormError] = useState<IError>(initialFormError);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, password } = formData;

    if (user.length === 0 || password.length === 0) {
      setFormError(emptyUserError);
      return;
    }

    userLogin(formData);
    navigate(0);
  };

  const handleOnChange = () => {
    setFormError(initialFormError);
  };

  return (
    <AuthContainer>
      <section className="auth-form-container">
        <form
          className="auth-form"
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
        >
          <img src={otw_loco} alt="on the way logo" className="otw-logo" />

          <div className="inputs-container">
            <InputElement
              type="text"
              label="Usuario o email"
              placeholder="Ingresa tu usuario"
              name="user"
              setFormData={setFormData}
              error={formError.value}
              value={formData.user}
              icon={<></>}
            />

            <InputElement
              type={showPassword}
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              name="password"
              setFormData={setFormData}
              error={formError.value}
              value={formData.password}
              icon={
                <img
                  src={showPassword === "text" ? eye_closed : eye}
                  alt=""
                  onClick={() =>
                    setShowPassword(
                      showPassword === "text" ? "password" : "text",
                    )
                  }
                />
              }
            />

            {formError.value.length > 0 && (
              <span className="auth-form-error">{formError.label}</span>
            )}
          </div>

          <p className="forgotten-password">
            ¿Has olvidado la contraseña?{" "}
            <Link to={Routes.password} className="password-link">
              Haz click aquí.
            </Link>
          </p>

          <button type="submit">Iniciar sesión</button>
        </form>
      </section>
    </AuthContainer>
  );
};

export default AuthLogin;
