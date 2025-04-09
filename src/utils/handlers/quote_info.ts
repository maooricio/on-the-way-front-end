import { Dispatch, SetStateAction } from "react";
import { IQuote, IQuoteErrors } from "../interfaces/quote.interface";

export const validateQuoteInfo = (
  formData: IQuote,
  setFormError: Dispatch<SetStateAction<IQuoteErrors>>
) => {
  // const deliveryTransport: string = formData.deliveryTransport;
  // const collectionTransport: string = formData.collectionTransport;
  const serviceDate: string = formData.serviceDate;
  const serviceHour: string = formData.serviceHour;
  const pickupCity: string = formData.pickupCity;
  const pickupAddress: string = formData.pickupAddress;
  const deliveryAddress: string = formData.deliveryAddress;
  const collectionAddress: string = formData.collectionAddress;
  const unloadingCity: string = formData.unloadingCity;
  const unloadingAdress: string = formData.unloadingAdress;

  let isValid = true;

  if (serviceDate.length === 0) {
    setFormError((prev) => ({
      ...prev,
      serviceDate: "Debes ingresar la fecha del servicio.",
    }));
    isValid = false;
  }

  if (serviceHour === "00:00") {
    setFormError((prev) => ({
      ...prev,
      serviceHour: "Debes ingresar la hora del servicio.",
    }));
    isValid = false;
  }

  if (pickupCity.length === 0) {
    setFormError((prev) => ({
      ...prev,
      pickupCity: "Debes ingresar la ciudad de recogida.",
    }));
    isValid = false;
  }

  if (pickupAddress.length === 0) {
    setFormError((prev) => ({
      ...prev,
      pickupAddress: "Debes ingresar la dirección de recogida.",
    }));
    isValid = false;
  }

  if (deliveryAddress.length === 0) {
    setFormError((prev) => ({
      ...prev,
      deliveryAddress: "Debes ingresar la dirección de entrega.",
    }));
    isValid = false;
  }

  if (collectionAddress.length === 0) {
    setFormError((prev) => ({
      ...prev,
      collectionAddress: "Debes ingresar la dirección de recolección.",
    }));
    isValid = false;
  }

  if (unloadingCity.length === 0) {
    setFormError((prev) => ({
      ...prev,
      unloadingCity: "Debes ingresar la ciudad de descarga.",
    }));
    isValid = false;
  }

  if (unloadingAdress.length === 0) {
    setFormError((prev) => ({
      ...prev,
      unloadingAdress: "Debes ingresar la dirección de descarga.",
    }));
    isValid = false;
  }

  return isValid;
};
