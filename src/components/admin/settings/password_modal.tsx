import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import Image from "next/image";
import InputElement from "@/components/inputs/input";
import eye from "@/assets/icons/utils/eye.svg";
import eye_closed from "@/assets/icons/utils/eye_closed.svg";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IPassword {
  currentPassword: string;
  newPassword: string;
  secondNewPassword: string;
}

const PasswordModal = ({ setShowModal, setIsLoading }: Props) => {
  const initialState: IPassword = {
    currentPassword: "",
    newPassword: "",
    secondNewPassword: "",
  };

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [data, setData] = useState<IPassword>(initialState);
  const [showPassword, setShowPassword] = useState<IPassword>(initialState);
  const [error, setError] = useState<IPassword>(initialState);

  const handleChangePassword = async () => {
    setIsLoading(true);

    if (data.newPassword.length < 8) {
      setError((prev) => ({
        ...prev,
        newPassword:
          "La contraseña debe contener minimo 8 caracteres alfanumericos.",
      }));
      setIsLoading(false);
      return;
    }

    if (data.newPassword !== data.secondNewPassword) {
      setError((prev) => ({
        ...prev,
        secondNewPassword: "Las contraseñas no coinciden.",
      }));
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setShowModal(false);
      setIsLoading(false);
    }, 1000);
  };

  const handleAuth = async () => {
    setIsLoading(true);

    if (data.currentPassword.length < 8) {
      setError((prev) => ({
        ...prev,
        currentPassword:
          "La contraseña es incorrecta. Ingresa su contraseña actual para cambiarla.",
      }));
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsAuth(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAuth) {
      handleChangePassword();
    } else {
      handleAuth();
    }
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit} onChange={() => setError(initialState)}>
        <div className="generic-modal-header">
          <h1>Cambiar contraseña</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          {isAuth ? (
            <>
              <p>Ingresa tu nueva contraseña:</p>

              <InputElement
                type={showPassword.newPassword.length > 0 ? "text" : "password"}
                label={""}
                placeholder={"Nueva contraseña"}
                name={"newPassword"}
                setFormData={setData}
                error={error.newPassword}
                value={data.newPassword}
                icon={
                  <Image
                    src={showPassword.newPassword.length > 0 ? eye : eye_closed}
                    alt="eye icon"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        newPassword: prev.newPassword.length > 0 ? "" : "-",
                      }))
                    }
                  />
                }
                showError={error.newPassword.length > 0}
              />

              <InputElement
                label={""}
                type={
                  showPassword.secondNewPassword.length > 0
                    ? "text"
                    : "password"
                }
                icon={
                  <Image
                    src={
                      showPassword.secondNewPassword.length > 0
                        ? eye
                        : eye_closed
                    }
                    alt="eye icon"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        secondNewPassword:
                          prev.secondNewPassword.length > 0 ? "" : "-",
                      }))
                    }
                  />
                }
                placeholder={"Repite la nueva contraseña"}
                name={"secondNewPassword"}
                value={data.secondNewPassword}
                error={error.secondNewPassword}
                setFormData={setData}
                showError={error.secondNewPassword.length > 0}
              />
            </>
          ) : (
            <>
              <p>Para continuar, introduce primero tu contraseña actual:</p>

              <InputElement
                label={""}
                type={
                  showPassword.currentPassword.length > 0 ? "text" : "password"
                }
                icon={
                  <Image
                    src={
                      showPassword.currentPassword.length > 0 ? eye : eye_closed
                    }
                    alt="eye icon"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        currentPassword:
                          prev.currentPassword.length > 0 ? "" : "-",
                      }))
                    }
                  />
                }
                placeholder={"Contraseña actual"}
                name={"currentPassword"}
                value={data.currentPassword}
                error={error.currentPassword}
                setFormData={setData}
                showError={error.currentPassword.length > 0}
              />
            </>
          )}
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button type="submit">
            {isAuth ? "Cambiar contraseña" : "Continuar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PasswordModal;
