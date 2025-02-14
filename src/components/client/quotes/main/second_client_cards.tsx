import Image from "next/image";
import SmallCard from "@/components/admin/home/small_card";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import clock from "@/assets/icons/others/clock.svg";
import pen from "@/assets/icons/others/pen.svg";
import message from "@/assets/icons/others/message.svg";
import useScreenSize from "@/utils/hooks/use_screen_width";

const ClientMainQuotesSecond = () => {
  const screen = useScreenSize();
  const clientSideIsLoaded = screen !== null;

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
            <p>Cotizaciones en proceso a la espera de revisión.</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=in_progress`}
              className="button"
            >
              {clientSideIsLoaded && (screen.width > 1240 || screen.width < 900)
                ? "Ver cotizaciones en proceso"
                : "En proceso"}
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span className="is-title">05</span>
            <Image src={message} alt="" />
          </header>
        }
        content={
          <div className="small-card-content">
            <h3>Nuevos comentarios</h3>
            <p>Cotizaciones en proceso con nuevos comentarios sin revisar.</p>
          </div>
        }
        footer={
          <footer className="small-card-button-container">
            <Link
              href={`${Routes.quotes_history}?state=comment`}
              className="button"
            >
              Ver comentarios
            </Link>
          </footer>
        }
      />

      <SmallCard
        header={
          <header className="small-card-header has-both">
            <span className="is-title">03</span>
            <Image src={pen} alt="" />
          </header>
        }
        content={
          <div className="small-card-content">
            <h3>Borradores</h3>
            <p>Solicitudes de cotizaciones que has guardado sin finalizar.</p>
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
