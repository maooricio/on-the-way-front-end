import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import { Dispatch, SetStateAction } from "react";

interface Props {
  formData: IUser;
  setFormData: Dispatch<SetStateAction<IUser>>;
}

const RegisterAdminForm = ({ formData, setFormData }: Props) => {
  return (
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
  );
};

export default RegisterAdminForm;
