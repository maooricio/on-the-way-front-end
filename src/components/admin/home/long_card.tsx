"use client";
import { getStateColor } from "@/utils/handlers/get_state_color";
import useScreenSize from "@/utils/hooks/use_screen_width";
import { Routes } from "@/utils/router/router_enum";
import Link from "next/link";

interface Props {
  userRole: string;
}

const LongCardTable = ({ userRole }: Props) => {
  const screen = useScreenSize();
  const clientSideIsLoaded = screen !== null;

  const fakeInfo = [
    {
      date: "12/03/2024",
      quote: "00278",
      client: "Juan José Eventos",
      amount: "12.000.42,90",
      state: {
        label: "En proceso",
        value: "in_progress",
      },
    },
    {
      date: "12/03/2024",
      quote: "00158",
      client: "María Suarez",
      amount: "1.902.000,00",
      state: {
        label: "En proceso",
        value: "in_progress",
      },
    },
    {
      date: "10/03/2024",
      quote: "00201",
      client: "Harley Bar",
      amount: "412.000,50",
      state: {
        label: "Pagada",
        value: "paid",
      },
    },
    {
      date: "05/03/2024",
      quote: "00210",
      client: "La Yumba S.C",
      amount: "1.200.000,00",
      state: {
        label: "Pago pendiente",
        value: "pending",
      },
    },
    {
      date: "10/03/2024",
      quote: "00215",
      client: "Festividades Cabildo",
      amount: "302.550,00",
      state: {
        label: "Verificar pago",
        value: "verify",
      },
    },
  ];

  return (
    <section className="long-card-table-container">
      <ul className="long-card-table">
        <li className="long-card-table-header">
          {clientSideIsLoaded && screen.width > 900 && <span>Fecha</span>}
          <span>Cotización</span>
          <span>{userRole === "admin" ? "Cliente" : "Nombre/ referencia"}</span>
          <span>Monto</span>
          {clientSideIsLoaded && screen.width > 900 && <span>Estado</span>}
        </li>

        {fakeInfo.map((i, index) => (
          <li key={`${i.quote}`} className="long-card-table-item">
            {clientSideIsLoaded && screen.width > 900 && <span>{i.date}</span>}
            <span>{i.quote}</span>
            <span>{i.client}</span>
            {clientSideIsLoaded && screen.width > 900 && (
              <span>{i.amount}</span>
            )}
            <span>
              <div className="long-card-last-item">
                <div
                  className="long-card-last-item-dot"
                  style={{ backgroundColor: getStateColor(i.state.value) }}
                ></div>
                {clientSideIsLoaded && screen.width > 900 ? i.state.label : ""}
              </div>

              {(index === 1 || index === 2 || index === 4) && (
                <div className="long-card-last-item-amount">
                  {index === 2 ? 2 : 1}
                </div>
              )}
            </span>
          </li>
        ))}
      </ul>

      <footer className="long-card-button-container">
        <Link href={Routes.quotes_history} type="button" className="link">
          Ver todas las cotizaciones
        </Link>
      </footer>
    </section>
  );
};

export default LongCardTable;
