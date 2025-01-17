import { IOperator } from "./operator.interface";
import { IUser } from "./user.interface";
import { IVehicles } from "./vehicles.interface";

export interface ICustomerSelect {
  selected?: IUser;
  search: string;
}

export interface IQuoteComment {
  userId: string;
  date: string;
  comment: string;
}

export interface IQuote {
  id?: string;
  userId?: string;
  quoteNumber?: string;
  state?: string;
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
  discountVoucher: {
    type: string;
    amount: number;
  };
  comment: IQuoteComment[];
  date?: string;
}
