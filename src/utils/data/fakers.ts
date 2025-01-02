export interface IFakeUser {
  id: string;
  name: string;
  company: string;
  role: string;
  endDate: string;
}

export interface IFakeQuote {
  id: string;
  date: string;
  quote: string;
  customer: string;
  amount: string;
  state: string;
}

export const FakeUsersList: IFakeUser[] = [
  {
    id: "asdfasdfasdq5",
    name: "Mariano Guzmán",
    company: "Juan José eventos",
    role: "customer",
    endDate: "12/03/2024",
  },
  {
    id: "asdfasdfasdw4",
    name: "Matías Suárez",
    company: "Matías Suárez",
    role: "customer",
    endDate: "12/03/2024",
  },
  {
    id: "asdfasdfasde3",
    name: "Alejandro Martínez",
    company: "Harley Bar",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdr2",
    name: "Jorge Martínez",
    company: "-",
    role: "admin",
    endDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdt1",
    name: "Gabriela Sánchez",
    company: "Hey ya S.A.S",
    role: "customer",
    endDate: "05/03/2024",
  },
  {
    id: "asdfasdfasdy0",
    name: "Emmanuel López",
    company: "-",
    role: "admin",
    endDate: "05/03/2024",
  },
  {
    id: "asdfasdfasdu9",
    name: "Isabella Rodríguez",
    company: "-",
    role: "admin",
    endDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdi8",
    name: "Gabriela Fernández",
    company: "Gabriela Fernández",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdo7",
    name: "Matías Álvarez",
    company: "El Garage S.L",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdp6",
    name: "Natalia Romero",
    company: "Eventos La Esmeralda",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasda5",
    name: "Antonia Pérez",
    company: "-",
    role: "admin",
    endDate: "05/03/2024",
  },
  {
    id: "asdfasdfasds4",
    name: "Felipe Rodríguez",
    company: "-",
    role: "admin",
    endDate: "09/03/2024",
  },
  {
    id: "asdfasdfasdd3",
    name: "Sofía García",
    company: "Sofía García",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdf2",
    name: "Mariana Gómez",
    company: "Playon eventos",
    role: "customer",
    endDate: "10/03/2024",
  },
  {
    id: "asdfasdfasdg1",
    name: "Samuel Pérez",
    company: "La yumba S.C",
    role: "customer",
    endDate: "10/03/2024",
  },
];

export const FakeQuotesList: IFakeQuote[] = [
  {
    id: "asdfasdfasdq5",
    date: "12/03/2024",
    quote: "00278",
    customer: "Juan José Eventos",
    amount: "$ 12.000.42,90",
    state: "En proceso",
  },
  {
    id: "asdfasdfasdq1",
    date: "12/03/2024",
    quote: "00158",
    customer: "María Suarez",
    amount: "$ 1.902.000,00",
    state: "En proceso",
  },
  {
    id: "asdfasdfasdq2",
    date: "10/03/2024",
    quote: "00201",
    customer: "Harley Bar",
    amount: "$ 412.000,50",
    state: "Pagada",
  },
  {
    id: "asdfasdfasdq3",
    date: "09/03/2024",
    quote: "00140",
    customer: "El Garage S.L",
    amount: "$ 902.000,50",
    state: "Cancelada",
  },
  {
    id: "asdfasdfasdq4",
    date: "05/03/2024",
    quote: "00250",
    customer: "Eventos la Esmeralda",
    amount: "$ 1.002.000,50",
    state: "Pagada",
  },
  {
    id: "asdfasdfasdq6",
    date: "05/03/2024",
    quote: "00210",
    customer: "La Yumba S.C",
    amount: "$ 1.200.000,00",
    state: "Pago pendiente",
  },
  {
    id: "asdfasdfasdq7",
    date: "09/03/2024",
    quote: "00183",
    customer: "Juan José Eventos",
    amount: "$ 902.000,50",
    state: "En proceso",
  },
  {
    id: "asdfasdfasdq8",
    date: "10/03/2024",
    quote: "00287",
    customer: "Juan José Eventos",
    amount: "$ 1.812.000,00",
    state: "Pagada",
  },
  {
    id: "asdfasdfasdq9",
    date: "10/03/2024",
    quote: "00215",
    customer: "Festividades Cabildo",
    amount: "$ 302.550,00",
    state: "Verificar pago",
  },
  {
    id: "asdfasdfasdq0",
    date: "10/03/2024",
    quote: "00145",
    customer: "Felipe Rodriguez",
    amount: "$ 753.000,00",
    state: "En proceso",
  },
  {
    id: "asdfasdfasda1",
    date: "05/03/2024",
    quote: "00209",
    customer: "Hey Ya S.A.S",
    amount: "$ 1.200.000,00",
    state: "Pago pendiente",
  },
  {
    id: "asdfasdfasda2",
    date: "09/03/2024",
    quote: "00257",
    customer: "Cristian Sancho",
    amount: "$902.000,50",
    state: "Pagada",
  },
  {
    id: "asdfasdfasda3",
    date: "10/03/2024",
    quote: "00146",
    customer: "María Suarez",
    amount: "$ 302.550,00",
    state: "En proceso",
  },
  {
    id: "asdfasdfasda4",
    date: "10/03/2024",
    quote: "00264",
    customer: "Paco Eventos",
    amount: "$ 302.550,00",
    state: "En proceso",
  },
  {
    id: "asdfasdfasda5",
    date: "10/03/2024",
    quote: "00269",
    customer: "Hey ya S.A.S",
    amount: "$ 302.550,00",
    state: "En proceso",
  },
];
