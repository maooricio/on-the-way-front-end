import { IQuote } from "../interfaces/quote.interface";
import { IUser, IUserLogged } from "../interfaces/user.interface";
import motocycle from "@/assets/images/vehicles/motocycle.svg";
import admin_photo from "@/assets/images/admin_photo.jpg";
import client_photo from "@/assets/images/client_photo.jpg";

export const FakeUsersLogged: IUserLogged[] = [
  {
    email: "admin@gmail.com",
    username: "admin.user",
    firstName: "María Laura",
    lastName: "Dominguez",
    password: "admin123",
    role: "admin",
    photo: admin_photo,
  },
  {
    email: "client@gmail.com",
    username: "client.user",
    firstName: "Andrea",
    lastName: "Jiménez",
    password: "client123",
    role: "client",
    photo: client_photo,
  },
];

export const FakeUsersList: IUser[] = [
  {
    id: "asdfasdfasdq5",
    firstName: "Mariano",
    lastName: "Guzmán",
    username: "mariano.guz",
    email: "mariano.guz@gmail.com",
    company: "Juan José eventos",
    role: "customer",
    dischargeDate: "12/03/2024",
  },
  {
    id: "asdfasdfasdw4",
    firstName: "Matías",
    lastName: "Suárez",
    username: "matias.sua",
    email: "matisuar@gmail.com",
    company: "Matías Suárez",
    role: "customer",
    dischargeDate: "12/03/2024",
  },
  {
    id: "asdfasdfasde3",
    firstName: "Alejandro",
    lastName: "Martínez",
    username: "alejandro.mar",
    email: "alemar@gmail.com",
    company: "Harley Bar",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdr2",
    firstName: "Jorge",
    lastName: "Martínez",
    username: "jorge.mar",
    email: "jormar@gmail.com",
    company: "-",
    role: "admin",
    dischargeDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdt1",
    firstName: "Gabriela",
    lastName: "Sánchez",
    username: "gabriela.san",
    email: "gabsan@gmail.com",
    company: "Hey ya S.A.S",
    role: "customer",
    dischargeDate: "05/03/2024",
  },
  {
    id: "asdfasdfasdy0",
    firstName: "Emmanuel",
    lastName: "López",
    username: "emmanuel.lop",
    email: "emmalop@gmail.com",
    company: "-",
    role: "admin",
    dischargeDate: "05/03/2024",
  },
  {
    id: "asdfasdfasdu9",
    firstName: "Isabella",
    lastName: "Rodríguez",
    username: "isabella.rod",
    email: "isarod@gmail.com",
    company: "-",
    role: "admin",
    dischargeDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdi8",
    firstName: "Gabriela",
    lastName: "Fernández",
    username: "gabriela.fer",
    email: "gabfer@gmail.com",
    company: "Gabriela Fernández",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdo7",
    firstName: "Matías",
    lastName: "Álvarez",
    username: "matias.alv",
    email: "matalv@gmail.com",
    company: "El Garage S.L",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdp6",
    firstName: "Natalia",
    lastName: "Romero",
    username: "natalia.rom",
    email: "natrom@gmail.com",
    company: "Eventos La Esmeralda",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasda5",
    firstName: "Antonia",
    lastName: "Pérez",
    username: "antonia.per",
    email: "antper@gmail.com",
    company: "-",
    role: "admin",
    dischargeDate: "05/03/2024",
  },
  {
    id: "asdfasdfasds4",
    firstName: "Felipe",
    lastName: "Rodríguez",
    username: "felipe.rod",
    email: "felrod@gmail.com",
    company: "-",
    role: "admin",
    dischargeDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdd3",
    firstName: "Sofía",
    lastName: "García",
    username: "sofia.gar",
    email: "sofgar@gmail.com",
    company: "Sofía García",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdf2",
    firstName: "Mariana",
    lastName: "Gómez",
    username: "mariana.gom",
    email: "margom@gmail.com",
    company: "Playon eventos",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdg1",
    firstName: "Samuel",
    lastName: "Pérez",
    username: "samuel.per",
    email: "samper@gmail.com",
    company: "La yumba S.C",
    role: "customer",
    dischargeDate: "10/03/2024",
  },
];

export const FakeQuotesList: IQuote[] = [
  {
    id: "asdfasdfasdq5",
    date: "12/03/2024",
    quoteNumber: "00278",
    state: "in_progress",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1200042.9,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq1",
    date: "12/03/2024",
    quoteNumber: "00158",
    state: "in_progress",
    userId: "asdfasdfasdw4",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1902000.0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq2",
    date: "10/03/2024",
    quoteNumber: "00201",
    state: "paid",
    userId: "asdfasdfasde3",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 412000.5,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq3",
    date: "09/03/2024",
    quoteNumber: "00140",
    state: "canceled",
    userId: "asdfasdfasdo7",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 902000.5,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq4",
    date: "05/03/2024",
    quoteNumber: "00250",
    state: "paid",
    userId: "asdfasdfasdp6",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1002000.5,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq6",
    date: "05/03/2024",
    quoteNumber: "00210",
    state: "pending",
    userId: "asdfasdfasdg1",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1200000,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq7",
    date: "09/03/2024",
    quoteNumber: "00183",
    state: "in_progress",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 902000.5,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq8",
    date: "10/03/2024",
    quoteNumber: "00287",
    state: "paid",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1812000,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq9",
    date: "10/03/2024",
    quoteNumber: "00215",
    state: "verify",
    userId: "asdfasdfasdf2",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 302550,
    vehicles: [],
    operators: [],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [],
  },
  {
    id: "asdfasdfasdq0",
    date: "10/03/2024",
    quoteNumber: "00145",
    state: "in_progress",
    userId: "asdfasdfasdt1",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 753000,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasda1",
    date: "05/03/2024",
    quoteNumber: "00209",
    state: "pending",
    userId: "asdfasdfasdt1",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 1200000,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdd3",
    date: "09/03/2024",
    quoteNumber: "00257",
    state: "paid",
    userId: "asdfasdfasdd3",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 902000.5,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasda3",
    date: "10/03/2024",
    quoteNumber: "00146",
    state: "in_progress",
    userId: "asdfasdfasdw4",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 302550,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasda4",
    date: "10/03/2024",
    quoteNumber: "00264",
    state: "in_progress",
    userId: "asdfasdfasdi8",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 302550,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasda5",
    date: "10/03/2024",
    quoteNumber: "00269",
    state: "in_progress",
    userId: "asdfasdfasdt1",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 302550,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq5",
    isRequest: true,
    date: "12/03/2024",
    quoteNumber: "00278",
    state: "in_progress",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq1",
    date: "12/03/2024",
    quoteNumber: "00158",
    isRequest: true,
    state: "in_progress",
    userId: "asdfasdfasdw4",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq2",
    date: "10/03/2024",
    quoteNumber: "00201",
    isRequest: true,
    state: "paid",
    userId: "asdfasdfasde3",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq3",
    date: "09/03/2024",
    quoteNumber: "00140",
    isRequest: true,
    state: "canceled",
    userId: "asdfasdfasdo7",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq4",
    date: "05/03/2024",
    quoteNumber: "00250",
    isRequest: true,
    state: "paid",
    userId: "asdfasdfasdp6",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq6",
    date: "05/03/2024",
    quoteNumber: "00210",
    isRequest: true,
    state: "pending",
    userId: "asdfasdfasdg1",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq7",
    date: "09/03/2024",
    quoteNumber: "00183",
    isRequest: true,
    state: "in_progress",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
  {
    id: "asdfasdfasdq8",
    date: "10/03/2024",
    quoteNumber: "00287",
    isRequest: true,
    state: "paid",
    userId: "asdfasdfasdq5",
    deliveryTransport: "",
    collectionTransport: "",
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [
      {
        id: "vehicle-asdf1",
        name: "Motorizado",
        image: motocycle,
        weight: "Hasta 40 kilos",
        price: 50000,
        amount: 5,
        sizes: {
          length: 0,
          width: 0,
          height: 0,
        },
      },
    ],
    operators: [
      {
        name: "Personal de seguridad",
        id: "security_personnel",
        price: 70000,
        amount: 2,
      },
    ],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [
      {
        userId: "asdfasdfasdq5",
        date: "21/05/2024 16:52:31",
        comment:
          "Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada.",
      },
    ],
  },
];
