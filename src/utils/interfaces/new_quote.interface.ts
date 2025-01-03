import { IFakeUser } from "../data/fakers";

export interface INewQuoteStageOneForm {
  customer?: IFakeUser;
  search: string;
}

export interface INewQuoteStageTwoForm {
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
