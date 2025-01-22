import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";

export interface IUserNames {
  firstName: string;
  lastName: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<IUser | undefined>>;
  userData: IUser | undefined;
}

const EditProfileModal = ({ setShowModal, setUserData, userData }: Props) => {
  const initialState: IUserNames = {
    firstName: userData?.firstName ?? "",
    lastName: userData?.lastName ?? "",
  };
  const [formData, setFormData] = useState<IUserNames>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userData) {
      setUserData({
        ...userData,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
    }

    setShowModal(false);
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Cambiar nombre</h1>

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
            error=""
            value={formData.firstName}
            icon={<></>}
          />

          <InputElement
            type="text"
            label="Apellido"
            placeholder="Añade una nota o comentario para el cliente..."
            name="lastName"
            setFormData={setFormData}
            error=""
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
            Cambiar cliente
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfileModal;
