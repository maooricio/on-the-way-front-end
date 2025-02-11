import Link from "next/link";
import SmallCard from "../../home/small_card";
import { Routes } from "@/utils/router/router_enum";

const AdminMainQuotesLast = () => {
  return (
    <section className="small-cards-container">
      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span>Pagos recibidos</span>
          </header>
        }
        content={
          <div className="small-card-content">
            <h3 className="is-title">$COP 641.023.773,50</h3>
            <p>Total recibido en pagos de cotizaciones</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=paid`}
              className="button without-bg"
            >
              Ver pagos recibidos
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span>Pagos pendientes</span>
          </header>
        }
        content={
          <div className="small-card-content">
            <h3 className="is-title">$COP 17.494.010,00</h3>
            <p>Total en pagos de 13 cotizaciones</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=pending`}
              className="button without-bg"
            >
              Ver pagos pendientes
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span>Pagos por verificar</span>
          </header>
        }
        content={
          <div className="small-card-content">
            <h3 className="is-title">$COP 3.711.480,50</h3>
            <p>Total en pagos de 4 cotizaciones</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=verify`}
              className="button without-bg"
            >
              Verificar pagos
            </Link>
          </footer>
        }
      />
    </section>
  );
};

export default AdminMainQuotesLast;
