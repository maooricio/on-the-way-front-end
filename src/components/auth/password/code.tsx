import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  IError,
  initialFormError,
  passwordCodeError,
} from "../../../utils/data/erros";
import arrow_left from "../../../assets/icons/arrow/arrow_left.svg";
import CodeInputs from "./code_inputs";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
}

const PasswordCode = ({ setStage }: Props) => {
  const initialState: string[] = ["", "", "", "", "", ""];

  const [formData, setFormData] = useState<string[]>(initialState);
  const [formError, setFormError] = useState<IError>(initialFormError);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEveryFullFilled = formData.every((i) => i.length > 0);

    if (!isEveryFullFilled) {
      setFormError(passwordCodeError);
      return;
    }

    setStage(2);
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
        <button type="button" className="link" onClick={() => setStage(0)}>
          <img src={arrow_left} alt="arrow left icon" />
        </button>

        <h3>Restablecer contraseña</h3>
      </header>

      <p>
        Por favor ingresa el código que te hemos enviado por correo para
        restablecer tu contraseña:
      </p>

      <CodeInputs
        initialState={initialState}
        error={formError}
        setFormData={setFormData}
      />

      <p className="resend-code">
        ¿No has recibido el código?{" "}
        <button type="button">Reenviar código.</button>
      </p>

      <button type="submit">Continuar</button>
    </form>
  );
};

export default PasswordCode;
