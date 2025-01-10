import { IOperator } from "./operator.interface";
import { IUser } from "./user.interface";
import { IVehicles } from "./vehicles.interface";

export interface INewQuoteStageOneForm {
  selected?: IUser;
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
  totalPrice: number;
  vehicles: IVehicles[];
  operators: IOperator[];
}
