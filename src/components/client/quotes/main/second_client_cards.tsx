import Image from "next/image";
import SmallCard from "@/components/admin/home/small_card";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import clock from "@/assets/icons/others/clock.svg";
import pen from "@/assets/icons/others/pen.svg";
import message from "@/assets/icons/others/message.svg";

const ClientMainQuotesSecond = () => {
  return (
    <section className="small-cards-container">
      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span className="is-title">23</span>
            <Image src={clock} alt="" />
          </header>
        }
        content={
          <div className="small-card-content">
            <h3>En proceso</h3>
            <p>
              Cotizaciones enviadas a las espera del pago o revisión del
              cliente.
            </p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=pending`}
              className="button"
            >
              Ver cotizaciones en proceso
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span className="is-title">04</span>
            <Image src={message} alt="" />
          </header>
        }
        content={
          <div className="small-card-content">
            <h3>Solicitudes y comentarios</h3>
            <p>Cotizaciones en proceso con solicitudes y/o comentarios.</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link href={Routes.to_quote} className="button">
              Ver solicitudes
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span className="is-title">08</span>
            <Image src={pen} alt="" />
          </header>
        }
        content={
          <div className="small-card-content">
            <h3>Borradores</h3>
            <p>Cotizaciones que has guardado sin finalizar o enviar.</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link href={Routes.quote_drafts} className="button">
              Ver borradores
            </Link>
          </footer>
        }
      />
    </section>
  );
};

export default ClientMainQuotesSecond;
