import InputElement from "@/components/elements/inputs/input";
import { IUser } from "@/utils/interfaces/user.interface";
import { Dispatch, SetStateAction } from "react";

interface Props {
  formData: IUser;
  setFormData: Dispatch<SetStateAction<IUser>>;
}

const RegisterCustomerForm = ({ formData, setFormData }: Props) => {
  return (
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
  );
};

export default RegisterCustomerForm;
