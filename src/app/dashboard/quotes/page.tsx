import NormalCard from "@/components/admin/home/normal_card";
import SmallCard from "@/components/admin/home/small_card";
import React from "react";
import calculator from "@/assets/icons/others/calculator.svg";
import clock from "@/assets/icons/others/clock.svg";
import sheet from "@/assets/icons/others/sheet.svg";
import pen from "@/assets/icons/others/pen.svg";
import message from "@/assets/icons/others/message.svg";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";

const QuotesPage = () => {
  return (
    <section className="admin-quotes-container">
      <header className="admin-quotes-header">
        <h1>Cotizaciones</h1>
      </header>

      <section className="normal-cards-container">
        <NormalCard
          header={
            <header className="normal-card-header">
              <h3 className="is-title">789</h3>
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
              <p>Revisa todas las cotizaciones enviadas, o crea una nueva.</p>
            </div>
          }
          footer={
            <footer className="normal-card-button-container">
              <Link href={Routes.quotes_new} className="button">Nueva cotización</Link>
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
              <h3>Por cotizar</h3>
              <p>Solicitudes de cotización recibidas de clientes.</p>
            </div>
          }
          footer={
            <footer className="normal-card-button-container">
              <button type="button">Ver solicitudes</button>
            </footer>
          }
        />
      </section>

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
              <button type="button" className="button">Ver cotizaciones en proceso</button>
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
              <button type="button" className="button">Ver solicitudes</button>
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
              <button type="button" className="button">Ver borradores</button>
            </footer>
          }
        />
      </section>

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
              <button type="button" className="without-bg">
                Ver pagos recibidos
              </button>
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
              <button type="button" className="without-bg">
                Ver pagos pendientes
              </button>
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
              <button type="button" className="without-bg">
                Verificar pagos
              </button>
            </footer>
          }
        />
      </section>
    </section>
  );
};

export default QuotesPage;
