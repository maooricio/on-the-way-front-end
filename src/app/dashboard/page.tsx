import SmallCard from "@/components/admin/home/small_card";
import calculator from "@/assets/icons/others/calculator.svg";
import NormalCard from "@/components/admin/home/normal_card";
import user from "@/assets/icons/utils/user.svg";
import quote from "@/assets/icons/utils/quote.svg";
import LongCardTable from "@/components/admin/home/long_card";
import Image from "next/image";

export default function Home() {
  return (
    <section className="admin-home-container">
      <header className="admin-home-header">
        <h1>Inicio</h1>
      </header>

      <section className="small-cards-container">
        <SmallCard
          header={
            <header className="small-card-header">
              <Image
                src={calculator}
                alt=""
              />
            </header>
          }
          content={
            <div className="small-card-content">
              <h3>Nueva cotización</h3>
              <p>
                Crea una nueva cotización, guárdala en borradores o envíala al
                cliente.
              </p>
            </div>
          }
          footer={
            <footer className="small-card-button-container">
              <button type="button">Nueva cotización</button>
            </footer>
          }
        />

        <SmallCard
          header={
            <header className="small-card-header has-both">
              <span className="is-title">07</span>
            </header>
          }
          content={
            <div className="small-card-content">
              <h3>Por cotizar</h3>
              <p>Solicitudes de cotización recibidas de clientes.</p>
            </div>
          }
          footer={
            <footer className="small-card-button-container">
              <button type="button" className="button">Ver pedidos</button>
            </footer>
          }
        />

        <SmallCard
          header={
            <header className="small-card-header has-both">
              <span className="is-title">23</span>
            </header>
          }
          content={
            <div className="small-card-content">
              <h3>Cotizaciones en proceso</h3>
              <p>
                Cotizaciones enviadas a las espera del pago o revisión del
                cliente.
              </p>
            </div>
          }
          footer={
            <footer className="small-card-button-container">
              <button type="button" className="button">Ver pendientes</button>
            </footer>
          }
        />
      </section>

      <section className="normal-cards-container">
        <NormalCard
          header={
            <header className="normal-card-header">
              <h3>Usuarios registrados</h3>
              <Image src={user} alt="" className="normal-card-header-item" />
            </header>
          }
          content={
            <div className="normal-card-content">
              <h3 className="is-title">907</h3>
              <p>26 usuarios nuevos esta semana</p>
            </div>
          }
          footer={
            <footer className="normal-card-button-container">
              <button type="button" className="without-bg">
                Gestionar usuarios
              </button>
            </footer>
          }
        />
        <NormalCard
          header={
            <header className="normal-card-header">
              <h3>Pagos por verificar</h3>
              <Image src={quote} alt="" className="normal-card-header-item" />
            </header>
          }
          content={
            <div className="normal-card-content">
              <h3 className="is-title">06</h3>
              <p>$COP 2.304.100,00 en total por verificar</p>
            </div>
          }
          footer={
            <footer className="normal-card-button-container">
              <button type="button" className="without-bg">
                Verificar pagos
              </button>
            </footer>
          }
        />
      </section>

      <section className="long-card-container">
        <LongCardTable />
      </section>
    </section>
  );
}
