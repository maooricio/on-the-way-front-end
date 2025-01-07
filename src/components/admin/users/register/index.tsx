"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";
import { IUser } from "@/utils/interfaces/user.interface";
import { validateUserForm } from "@/utils/handlers/user_login";
import RegisterCustomerForm from "./customer_form";
import RegisterAdminForm from "./admin_form";

interface Props {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm = ({ setShowForm }: Props) => {
  const initialState: IUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  };
  const [userRole, setUserRole] = useState<string>("");
  const [formData, setFormData] = useState<IUser>(initialState);

  const handleSubmit = () => {
    setShowForm(false);
  };

  const formIsDisabled =
    userRole === "admin"
      ? validateUserForm(formData, {
          firstName: 4,
          lastName: 6,
          email: 8,
        })
      : false;

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowForm(false)}
      ></div>

      <form onSubmit={handleSubmit} className="register-form-container">
        <div className="generic-modal-header">
          <h1>Registrar usuario</h1>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <p className="generic-modal-description">
          Por favor, proporciona la siguiente información para registrar al
          usuario:
        </p>

        <div
          className={`register-form-content-container ${
            userRole === "customer" && "register-form-content-with-overflow"
          }`}
        >
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

          {userRole === "admin" && (
            <RegisterAdminForm formData={formData} setFormData={setFormData} />
          )}

          {userRole === "customer" && (
            <RegisterCustomerForm
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowForm(false)}>
            Cancelar
          </button>
          <button type="submit" disabled={formIsDisabled}>
            Registrar usuario
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
