export interface IVehicles {
  _id?: string;
  imageId: string;
  name: string;
  image: string;
  weight: string;
  price: number;
  amount: number;
  sizes: {
    length: number[];
    width: number;
    height: number;
  };
}
