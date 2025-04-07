import { Dispatch, SetStateAction } from "react";
import { IQuote, IQuoteErrors } from "../interfaces/quote.interface";

export const validateQuoteInfo = (
  formData: IQuote,
  setFormError: Dispatch<SetStateAction<IQuoteErrors>>,
) => {
//   const deliveryTransport: string | undefined = formData.deliveryTransport;
//   const collectionTransport: string | undefined = formData.collectionTransport;
  const serviceDate: string = formData.serviceDate;
  // const serviceHour: string = formData.serviceHour;
  // const pickupCity: string = formData.pickupCity;
  // const pickupAddress: string = formData.pickupAddress;
  // const deliveryAddress: string = formData.deliveryAddress;
  // const collectionAddress: string = formData.collectionAddress;
  // const unloadingCity: string = formData.unloadingCity;
  // const unloadingAdress: string = formData.unloadingAdress;

  let isValid = true;

  if (serviceDate.length === 0) {
    setFormError((prev) => ({
      ...prev,
      serviceDate: "Debes ingresar la fecha del servicio.",
    }));
    isValid = false;
  }

  return isValid;
};
