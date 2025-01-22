import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";

export interface IEditUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<IUser | undefined>>;
  userData: IUser | undefined;
}

const EditUserModal = ({ setShowModal, setUserData, userData }: Props) => {
  const initialState: IEditUser = {
    firstName: userData?.firstName ?? "",
    lastName: userData?.lastName ?? "",
    email: userData?.email ?? "",
  };
  const [formData, setFormData] = useState<IEditUser>(initialState);
  const [userRole, setUserRole] = useState<string>(userData?.role ?? "");

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
    <section className="generic-modal delete-user-container">
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
          <CustomSelect
            labelName="Rol"
            options={[
              {
                label: "Selecciona el rol de usuario",
                value: "",
              },
              ...usersRoleOptions,
            ]}
            setValue={setUserRole}
            value={userRole}
          />

          <div className="generic-modal-content-row">
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

          <InputElement
            type="text"
            label="Email"
            placeholder="Añade una nota o comentario para el cliente..."
            name="email"
            setFormData={setFormData}
            error=""
            value={formData.email}
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

export default EditUserModal;
