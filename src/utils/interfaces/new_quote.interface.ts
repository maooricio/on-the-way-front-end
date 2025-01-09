import { IUser } from "./user.interface";

export interface INewQuoteStageOneForm {
  customer?: IUser;
  search: string;
}

export interface INewQuoteStageTwoForm {
  userId?: string;
  deliveryTransport: boolean;
  collectionTransport: boolean;
  serviceDate: string;
  serviceHour: string;
  pickupCity: string;
  pickupAddress: string;
  deliveryAddress: string;
  collectionAddress: string;
  unloadingCity: string;
  unloadingAdress: string;
}
