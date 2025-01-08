import CustomSelect from "@/components/elements/handlers/custom_select";
import InputElement from "@/components/elements/inputs/input";
import { idTypeOptions } from "@/utils/data/id_types";
import { IUser } from "@/utils/interfaces/user.interface";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import search from "@/assets/icons/others/glass.svg";

interface Props {
  formData: IUser;
  setFormData: Dispatch<SetStateAction<IUser>>;
}

const RegisterCustomerForm = ({ formData, setFormData }: Props) => {
  const [idType, setIdType] = useState<string>("");

  return (
    <>
      <InputElement
        type="text"
        label="Razón social"
        placeholder="Ingresa la razón social"
        name="company"
        setFormData={setFormData}
        error=""
        value={formData.company ?? ""}
        icon={<></>}
        showError={false}
      />

      <div className="register-form-content-row">
        <CustomSelect
          labelName="Tipo de documento de la empresa"
          options={[
            { label: "Selecciona el tipo", value: "" },
            ...idTypeOptions,
          ]}
          setValue={setIdType}
          value={idType}
        />

        <InputElement
          type="text"
          label="Número de documento de la empresa"
          placeholder="Ingresa el número de documento"
          name="idNumber"
          setFormData={setFormData}
          error=""
          value={formData.idNumber ?? ""}
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
          name="phone"
          setFormData={setFormData}
          error=""
          value={formData.phone ?? ""}
          icon={<></>}
          showError={false}
        />
      </div>

      <div className="register-form-content-row">
        <InputElement
          type="text"
          label="Ciudad"
          placeholder="Ingresa la Ciudad"
          name="city"
          setFormData={setFormData}
          error=""
          value={formData.city ?? ""}
          icon={<Image src={search} alt="search icon" />}
          showError={false}
        />

        <InputElement
          type="text"
          label="Dirección"
          placeholder="Ingresa la dirección"
          name="address"
          setFormData={setFormData}
          error=""
          value={formData.address ?? ""}
          icon={<></>}
          showError={false}
        />
      </div>
    </>
  );
};

export default RegisterCustomerForm;
