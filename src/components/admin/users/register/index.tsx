"use client";
import Image from "next/image";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import close from "@/assets/icons/utils/close.svg";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";
import { IUser } from "@/utils/interfaces/user.interface";
import RegisterCustomerForm from "./customer_form";
import RegisterAdminForm from "./admin_form";
import { createUser } from "@/utils/api/users";
import { validateUserData } from "@/utils/handlers/user_register";
import Loader from "@/assets/images/loader";

interface Props {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  handleGetUsers: () => void;
}

const RegisterForm = ({ setShowForm, handleGetUsers }: Props) => {
  const initialAdminState: IUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  };
  const initialCustomerState: IUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    idType: "",
    idNumber: "",
    city: "",
    address: "",
    company: "",
  };
  const [userRole, setUserRole] = useState<string>("");
  const [formData, setFormData] = useState<IUser>(initialAdminState);
  const [formError, setFormError] = useState<IUser>(initialAdminState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formIsValid = validateUserData(userRole, formData, setFormError);

    if (!formIsValid) {
      return;
    }

    try {
      const res = await createUser({ ...formData, role: userRole });

      if (!res.data.data) {
        return;
      }

      handleGetUsers();
      setShowForm(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = () => {
    setFormError(
      userRole === "admin" ? initialAdminState : initialCustomerState
    );
  };

  useEffect(() => {
    setFormData(
      userRole === "admin" ? initialAdminState : initialCustomerState
    );
    setFormError(
      userRole === "admin" ? initialAdminState : initialCustomerState
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole]);

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowForm(false)}
      ></div>

      <form
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        className="register-form-container"
      >
        <div className="generic-modal-header">
          <h1>Registrar usuario</h1>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="close modal icon" />
          </button>
        </div>

        <div
          className={`register-form-content-container ${
            userRole === "customer" && "register-form-content-with-overflow"
          }`}
        >
          <p className="generic-modal-description">
            Por favor, proporciona la siguiente información para registrar al
            usuario:
          </p>

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
            <RegisterAdminForm
              formData={formData}
              setFormData={setFormData}
              formError={formError}
            />
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
          <button type="submit">Registrar usuario</button>
        </div>
      </form>

      {isLoading && <Loader />}
    </section>
  );
};

export default RegisterForm;
