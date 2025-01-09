import motocycle from "@/assets/images/vehicles/motocycle.svg";
import van from "@/assets/images/vehicles/van.svg";
import small_truck from "@/assets/images/vehicles/small_truck.svg";
import normal_truck from "@/assets/images/vehicles/normal_truck.svg";
import long_truck from "@/assets/images/vehicles/long_truck.svg";

export const VehiclesData = [
  {
    id: "vehicle-asdf1",
    name: "Motorizado",
    image: motocycle,
    weight: "Hasta 40 kilos",
    sizes: {
      length: 0,
      width: 0,
      height: 0,
    },
  },
  {
    id: "vehicle-asdf2",
    name: "Carry - Furgón",
    image: van,
    weight: "Hasta 700 kilos (7 m³)",
    sizes: {
      length: 2.9,
      width: 1.8,
      height: 2,
    },
  },
  {
    id: "vehicle-asdf3",
    name: "Nhr - Furgón",
    image: small_truck,
    weight: "Hasta 2.5 toneladas (13 m³)",
    sizes: {
      length: 3.5,
      width: 1.8,
      height: 2,
    },
  },
  {
    id: "vehicle-asdf4",
    name: "Turbo - Estacas",
    image: normal_truck,
    weight: "Hasta 4.5 toneladas (25 m³)",
    sizes: {
      length: 5,
      width: 2.25,
      height: 2.3,
    },
  },
  {
    id: "vehicle-asdf5",
    name: "Sencillo - Estacas",
    image: long_truck,
    weight: "Hasta 9 toneladas (38 m³)",
    sizes: {
      length: [5.5, 7],
      width: 2.4,
      height: 2.5,
    },
  },
];
