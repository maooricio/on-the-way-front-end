import NormalCard from "@/components/admin/home/normal_card";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import calculator from "@/assets/icons/others/calculator.svg";
import sheet from "@/assets/icons/others/sheet.svg";

const ClientMainQuotesFirst = () => {
  return (
    <section className="normal-cards-container">
      <NormalCard
        header={
          <header className="normal-card-header">
            <h3 className="is-title">179</h3>
            <Image
              src={calculator}
              alt=""
              className="normal-card-header-item"
            />
          </header>
        }
        content={
          <div className="normal-card-content">
            <h3>Historial de cotizaciones</h3>
            <p>
              Revisa todas las cotizaciones recibidas, o crea una nueva
              solicitud.
            </p>
          </div>
        }
        footer={
          <footer className="normal-card-button-container">
            <Link href={Routes.quotes_new} className="button">
              Nueva cotización
            </Link>
            <Link href={Routes.quotes_history} className="without-bg">
              Ver historial de cotizaciones
            </Link>
          </footer>
        }
      />

      <NormalCard
        header={
          <header className="normal-card-header">
            <h3 className="is-title">07</h3>
            <Image src={sheet} alt="" className="normal-card-header-item" />
          </header>
        }
        content={
          <div className="normal-card-content">
            <h3>Esperando cotización</h3>
            <p>Solicitudes enviadas a la espera de cotización.</p>
          </div>
        }
        footer={
          <footer className="normal-card-button-container">
            <Link href={Routes.waiting_quote} className="button">
              Ver solicitudes
            </Link>
          </footer>
        }
      />
    </section>
  );
};

export default ClientMainQuotesFirst;
