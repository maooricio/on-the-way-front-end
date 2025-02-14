import Link from "next/link";
import SmallCard from "@/components/admin/home/small_card";
import { Routes } from "@/utils/router/router_enum";
import useScreenSize from "@/utils/hooks/use_screen_width";

const ClientMainQuotesLast = () => {
  const screen = useScreenSize();
  const clientSideIsLoaded = screen !== null;

  return (
    <section className="small-cards-container">
      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span>Pagos realizados</span>
          </header>
        }
        content={
          <div className="small-card-content">
            <h3 className="is-title">$COP 31.873.650,50</h3>
            <p>Total realizado en pagos de cotizaciones</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=paid`}
              className="button without-bg"
            >
              Ver pagos realizados
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
            <h3 className="is-title">$COP 6.512.000,40</h3>
            <p>Total en pagos de 06 cotizaciones</p>
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
            <span>Pagos en verificación</span>
          </header>
        }
        content={
          <div className="small-card-content">
            <h3 className="is-title">$COP 1.908.680,00</h3>
            <p>Total en pagos de 03 cotizaciones</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=verify`}
              className="button without-bg"
            >
              {clientSideIsLoaded && (screen.width > 1024 || screen.width < 900)
                ? "Ver pagos en verificación"
                : "Ver en verificación"}
            </Link>
          </footer>
        }
      />
    </section>
  );
};

export default ClientMainQuotesLast;
