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

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleAuth = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsAuth(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="generic-modal">
      <div className="background" onClick={() => setShowModal(false)}></div>

      <form
        onSubmit={(e) => (isAuth ? handleChangePassword(e) : handleAuth(e))}
        onChange={() => setError(initialState)}
      >
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
            <div className="change-password-modal-inputs">
              <p>Ingresa tu nueva contraseña:</p>

              <InputElement
                type={
                  showPassword.secondNewPassword.length > 0
                    ? "text"
                    : "password"
                }
                label={""}
                placeholder={""}
                name={"newPassword"}
                setFormData={setData}
                error={error.newPassword}
                value={data.newPassword}
                icon={
                  <Image
                    src={
                      showPassword.secondNewPassword.length > 0
                        ? eye
                        : eye_closed
                    }
                    alt="eye icon"
                  />
                }
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
                  />
                }
                placeholder={"Repite tu nueva contraseña"}
                name={"secondNewPassword"}
                value={data.secondNewPassword}
                error={error.secondNewPassword}
                setFormData={setData}
                showError={error.secondNewPassword.length > 0}
              />
            </div>
          ) : (
            <div className="change-password-modal-inputs">
              <p>Para continuar, introduce primero tu contraseña actual:</p>

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
                        currentPassword:
                          prev.currentPassword.length > 0 ? "" : "-",
                      }))
                    }
                  />
                }
                placeholder={"Contraseña actual"}
                name={"secondNewPassword"}
                value={data.secondNewPassword}
                error={error.secondNewPassword}
                setFormData={setData}
                showError={error.secondNewPassword.length > 0}
              />
            </div>
          )}
        </div>

        <div className="generic-modal-buttons">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="button"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="button"
            disabled={
              !isAuth
                ? data.currentPassword.length < 8
                : data.newPassword.length < 8 ||
                  data.secondNewPassword.length < 8
            }
          >
            {isAuth ? "Cambiar contraseña" : "Continuar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PasswordModal;
