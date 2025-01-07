"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";

interface Props {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm = ({ setShowForm }: Props) => {
  const [userRole, setUserRole] = useState<string>("");

  const handleSubmit = () => {
    setShowForm(false);
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowForm(false)}
      ></div>

      <form onSubmit={handleSubmit}>
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

        <div className="register-form-content-container">
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
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowForm(false)}>
            Cancelar
          </button>
          <button type="submit">Registrar usuario</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
