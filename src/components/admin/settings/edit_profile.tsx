import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import { editUserInfo } from "@/utils/api/settings";

export interface IEditProfile {
  firstName: string;
  lastName: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<IUser | undefined>>;
  userData: IUser | undefined;
}

const EditProfileModal = ({ setShowModal, setUserData, userData }: Props) => {
  const initialState: IEditProfile = {
    firstName: userData?.firstName ?? "",
    lastName: userData?.lastName ?? "",
  };
  const [formData, setFormData] = useState<IEditProfile>(initialState);
  const [formError, setFormError] = useState<IEditProfile>({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.firstName.length < 3) {
      setFormError((prev) => ({
        ...prev,
        firstName: "El nombre no puede estar vacio.",
      }));
      return;
    }

    if (formData.lastName.length < 3) {
      setFormError((prev) => ({
        ...prev,
        lastName: "El apellido no puede estar vacio.",
      }));
      return;
    }

    try {
      const res = await editUserInfo(userData?.id ?? "", formData);

      if (!res.data.data) {
        setFormError((prev) => ({
          ...prev,
          lastName: "La información del usuario no pudo ser cambiada.",
        }));
        return;
      }

      setUserData({
        ...userData,
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: "",
        email: userData?.email ?? "",
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Editar usuario</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <InputElement
            type="text"
            label="Nombre"
            placeholder="Añade una nota o comentario para el cliente..."
            name="firstName"
            setFormData={setFormData}
            error={formError.firstName}
            showError={formError.firstName.length > 0}
            value={formData.firstName}
            icon={<></>}
          />

          <InputElement
            type="text"
            label="Apellido"
            placeholder="Añade una nota o comentario para el cliente..."
            name="lastName"
            setFormData={setFormData}
            error={formError.lastName}
            showError={formError.lastName.length > 0}
            value={formData.lastName}
            icon={<></>}
          />
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button
            type="submit"
            disabled={
              userData?.firstName === formData.firstName &&
              userData?.lastName === formData.lastName
            }
          >
            Editar usuario
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfileModal;
