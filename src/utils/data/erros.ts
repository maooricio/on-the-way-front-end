export interface IError {
  label: string;
  value: string;
}

const initialFormError: IError = { label: "", value: "" };

const validateUserError: IError = {
  label:
    "Su correo electrónico y contraseña no coinciden. Por favor, inténta de nuevo.",
  value: "validateUserError",
};

const emptyUserError: IError = {
  label:
    "Debes ingresar tu correo electrónico y contraseña para iniciar sesión.",
  value: "emptyUserError",
};

const recoverPasswordError: IError = {
  label: "Debes ingresar tu correo electrónico para cambiar tu contraseña.",
  value: "recoverPasswordError",
};

export {
  validateUserError,
  emptyUserError,
  recoverPasswordError,
  initialFormError,
};