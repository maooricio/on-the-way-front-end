export interface IVehicles {
  id: string;
  name: string;
  image: string;
  weight: string;
  sizes: {
    length: number | number[];
    width: number;
    height: number;
  };
}
