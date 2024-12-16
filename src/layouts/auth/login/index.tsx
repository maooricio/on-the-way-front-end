import AuthContainer from "../../../containers/auth";
import otw_loco from "../../../assets/images/otw_logo.svg";
import { Link } from "react-router-dom";
import { Routes } from "../../../utils/router/router_enum";
import InputElement from "../../../components/inputs/input";
import { useState } from "react";

export interface ILoginFormData {
  user: string;
  password: string;
}

const AuthLogin = () => {
  const initialState: ILoginFormData = {
    user: "",
    password: ""
  }
  const [formData, setFormData] = useState<ILoginFormData>(initialState);

  return (
    <AuthContainer>
      <section className="login-container">
        <img src={otw_loco} alt="on the way logo" className="otw-logo" />

        <form className="login-form">
          <div className="inputs-container">
            <InputElement 
              type="text"
              label="Usuario o email"
              placeholder="Ingresa tu usuario"
              name="user"
              setFormData={setFormData}
              error={""}
              value={formData.user}
              icon={<></>}
            />
          </div>

          <p className="forgotten-password">
            ¿Has olvidado la contraseña?{" "}
            <Link to={Routes.password}>Haz click aquí.</Link>
          </p>

          <button type="submit">Iniciar sesión</button>
        </form>
      </section>
    </AuthContainer>
  );
};

export default AuthLogin;
