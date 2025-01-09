export interface IVehicles {
  id: string;
  name: string;
  image: string;
  weight: string;
  price: number;
  amount: number;
  sizes: {
    length: number | number[];
    width: number;
    height: number;
  };
}
