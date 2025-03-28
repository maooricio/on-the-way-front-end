import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import Image from "next/image";
import InputElement from "@/components/elements/inputs/input";
import eye from "@/assets/icons/utils/eye.svg";
import eye_closed from "@/assets/icons/utils/eye_closed.svg";
import { authUser, changePassword } from "@/utils/api/auth";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  email: string | undefined;
}

export interface IPassword {
  currentPassword: string;
  newPassword: string;
  secondNewPassword: string;
}

const PasswordModal = ({ setShowModal, setIsLoading, email }: Props) => {
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

    if (data.newPassword.length < 6) {
      setError((prev) => ({
        ...prev,
        newPassword:
          "La contraseña debe contener minimo 6 caracteres alfanumericos.",
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

    try {
      const res = await changePassword({
        user: email ?? "",
        password: data.newPassword,
      });

      if (!res.data.data) {
        setError((prev) => ({
          ...prev,
          secondNewPassword: "La contraseña no pudo ser cambiada.",
        }));
        setIsLoading(false);
        return;
      }

      setShowModal(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuth = async () => {
    setIsLoading(true);

    try {
      const res = await authUser({
        user: email ?? "",
        password: data.currentPassword,
      });

      if (!res.data.data) {
        setError((prev) => ({
          ...prev,
          currentPassword:
            "La contraseña es incorrecta. Ingresa su contraseña actual para cambiarla.",
        }));
        setIsLoading(false);
        return;
      }

      setIsAuth(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
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
