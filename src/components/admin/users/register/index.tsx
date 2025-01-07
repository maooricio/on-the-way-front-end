"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";
import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import { validateUserForm } from "@/utils/handlers/user_login";

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
            <>
              <div className="register-form-content-row">
                <InputElement
                  type="text"
                  label="Nombre"
                  placeholder="Ingresa el nombre"
                  name="firstName"
                  setFormData={setFormData}
                  error=""
                  value={formData.firstName}
                  icon={<></>}
                  showError={false}
                />

                <InputElement
                  type="text"
                  label="Apellido"
                  placeholder="Ingresa el apellido"
                  name="lastName"
                  setFormData={setFormData}
                  error=""
                  value={formData.lastName}
                  icon={<></>}
                  showError={false}
                />
              </div>

              <InputElement
                type="text"
                label="Email"
                placeholder="Ingresa el email"
                name="email"
                setFormData={setFormData}
                error=""
                value={formData.email}
                icon={<></>}
                showError={false}
              />
            </>
          )}

          {userRole === "customer" && (
            <>
              <InputElement
                type="text"
                label="Razón social"
                placeholder="Ingresa la razón social"
                name="email"
                setFormData={setFormData}
                error=""
                value={formData.email}
                icon={<></>}
                showError={false}
              />

              <div className="register-form-content-row">
                <InputElement
                  type="text"
                  label="Tipo de documento de la empresa"
                  placeholder="Selecciona el tipo"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />

                <InputElement
                  type="text"
                  label="Número de documento de la empresa"
                  placeholder="Ingresa el número de documento"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />
              </div>

              <div className="register-form-content-row">
                <InputElement
                  type="text"
                  label="Nombre de la persona responsable"
                  placeholder="Ingresa el nombre"
                  name="firstName"
                  setFormData={setFormData}
                  error=""
                  value={formData.firstName}
                  icon={<></>}
                  showError={false}
                />

                <InputElement
                  type="text"
                  label="Apellido de la persona responsable"
                  placeholder="Apellido persona responsable"
                  name="lastName"
                  setFormData={setFormData}
                  error=""
                  value={formData.lastName}
                  icon={<></>}
                  showError={false}
                />
              </div>

              <div className="register-form-content-row">
                <InputElement
                  type="text"
                  label="Email"
                  placeholder="Ingresa el email"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />

                <InputElement
                  type="text"
                  label="Teléfono"
                  placeholder="Ingresa el teléfono"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />
              </div>

              <div className="register-form-content-row">
                <InputElement
                  type="text"
                  label="Ciudad"
                  placeholder="Ingresa la Ciudad"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />

                <InputElement
                  type="text"
                  label="Dirección"
                  placeholder="Ingresa la dirección"
                  name="email"
                  setFormData={setFormData}
                  error=""
                  value={formData.email}
                  icon={<></>}
                  showError={false}
                />
              </div>
            </>
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
