"use client";
import InputElement from "@/components/inputs/input";
import AuthContainer from "@/containers/auth";
import { redirect } from "next/navigation";
import { emptyUserError, IError, initialFormError } from "@/utils/data/erros";
import { userIsLogin, userLogin } from "@/utils/handlers/user_login";
import { ILoginFormData } from "@/utils/interfaces/user.interface";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import otw_logo from "../../../assets/images/otw_logo.svg";
import eye from "../../../assets/icons/utils/eye.svg";
import eye_closed from "../../../assets/icons/utils/eye_closed.svg";
import Link from "next/link";

const LoginPage = () => {
  const initialState: ILoginFormData = {
    user: "",
    password: "",
  };

  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [formData, setFormData] = useState<ILoginFormData>(initialState);
  const [showPassword, setShowPassword] = useState<string>("password");
  const [formError, setFormError] = useState<IError>(initialFormError);

  const checkAuth = async () => {
    const isAuthenticated = await userIsLogin();

    if (isAuthenticated) {
      redirect(Routes.main);
    } else {
      setIsValidated(true);
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, password } = formData;

    if (user.length === 0 || password.length === 0) {
      setFormError(emptyUserError);
      return;
    }

    userLogin(formData);
    redirect(Routes.main);
  };

  const handleOnChange = () => {
    setFormError(initialFormError);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    isValidated && (
      <AuthContainer>
        <section className="auth-form-container">
          <form
            className="auth-form"
            onSubmit={handleOnSubmit}
            onChange={handleOnChange}
          >
            <Image src={otw_logo} alt="on the way logo" className="otw-logo" />

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
                  <Image
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
              <Link href={Routes.password} className="password-link">
                Haz click aquí.
              </Link>
            </p>

            <button type="submit">Iniciar sesión</button>
          </form>
        </section>
      </AuthContainer>
    )
  );
};

export default LoginPage;
