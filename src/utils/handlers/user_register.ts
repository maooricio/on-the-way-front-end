import { Dispatch, SetStateAction } from "react";
import { IUser } from "../interfaces/user.interface";

export const validateUserData = (
  userRole: string,
  userData: IUser,
  setFormError: Dispatch<SetStateAction<IUser>>
) => {
  // main info
  const userFirstName = userData.firstName;
  const userLastName = userData.lastName;
  const userEmail = userData.email;
  // customer info
  const userCompany = userData.company ?? "";
  const userIdType = userData.idType ?? "";
  const userIdNumber = userData.idNumber ?? "";
  const userPhone = userData.phone ?? "";
  const userCity = userData.city ?? "";
  const userAddress = userData.address ?? "";

  let isValid = true;

  if (userFirstName.length <= 2) {
    setFormError((prev) => ({
      ...prev,
      firstName: "Debes ingresar un nombre.",
    }));
    isValid = false;
  }

  if (userLastName.length <= 2) {
    setFormError((prev) => ({
      ...prev,
      lastName: "Debes ingresar un apellido.",
    }));
    isValid = false;
  }

  if (userEmail.length <= 6) {
    setFormError((prev) => ({
      ...prev,
      email: "Debes ingresar un correo.",
    }));
    isValid = false;
  }

  if (userRole === "customer") {
    if (userCompany.length <= 3) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes ingresar una razón social.",
      }));
      isValid = false;
    }

    if (userIdType.length === 0) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes seleccionar el tipo de documento.",
      }));
      isValid = false;
    }

    if (userIdNumber.length <= 5) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes ingresar el número de documento.",
      }));
      isValid = false;
    }

    if (userPhone.length <= 6) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes ingresar un número de teléfono.",
      }));
      isValid = false;
    }

    if (userCity.length <= 3) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes ingresar una ciudad.",
      }));
      isValid = false;
    }

    if (userAddress.length <= 6) {
      setFormError((prev) => ({
        ...prev,
        email: "Debes ingresar una dirección.",
      }));
      isValid = false;
    }
  }

  return isValid;
};
