import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import { Dispatch, SetStateAction } from "react";

interface Props {
  formData: IUser;
  setFormData: Dispatch<SetStateAction<IUser>>;
  formError: IUser;
}

const RegisterAdminForm = ({ formData, setFormData, formError }: Props) => {
  return (
    <>
      <div className="register-form-content-row">
        <InputElement
          type="text"
          label="Nombre"
          placeholder="Ingresa el nombre"
          name="firstName"
          setFormData={setFormData}
          value={formData.firstName}
          error={formError.firstName}
          showError={formError.firstName.length > 0}
          icon={<></>}
        />

        <InputElement
          type="text"
          label="Apellido"
          placeholder="Ingresa el apellido"
          name="lastName"
          setFormData={setFormData}
          value={formData.lastName}
          error={formError.lastName}
          showError={formError.lastName.length > 0}
          icon={<></>}
        />
      </div>

      <InputElement
        type="text"
        label="Email"
        placeholder="Ingresa el email"
        name="email"
        setFormData={setFormData}
        value={formData.email}
        error={formError.email}
        showError={formError.email.length > 0}
        icon={<></>}
      />
    </>
  );
};

export default RegisterAdminForm;
