import SmallCard from "@/components/admin/home/small_card";
import AdminContainer from "@/containers/admin";
import calculator from "@/assets/icons/utils/calculator.svg";
import NormalCard from "@/components/admin/home/normal_card";
import user from "@/assets/icons/utils/user.svg";
import quote from "@/assets/icons/utils/quote.svg";
import LongCardTable from "@/components/admin/home/long_card";

export default function Home() {
  return (
    <AdminContainer>
      <section className="admin-home-container">
        <header className="admin-home-header">
          <h1>Inicio</h1>
        </header>

        <section className="small-cards-container">
          <SmallCard
            icon={calculator}
            number=""
            title="Nueva cotización"
            description="Crea una nueva cotización, guárdala en borradores o envíala al cliente."
            buttonInfo="Nueva cotización"
          />

          <SmallCard
            number="07"
            title="Por cotizar"
            description="Solicitudes de cotización recibidas de clientes."
            buttonInfo="Ver pedidos"
          />

          <SmallCard
            number="23"
            title="Cotizaciones en proceso"
            description="Cotizaciones enviadas a las espera del pago o revisión del cliente."
            buttonInfo="Ver pendientes"
          />
        </section>

        <section className="normal-cards-container">
          <NormalCard
            icon={user}
            title={"Usuarios registrados"}
            number={"907"}
            description={"26 usuarios nuevos esta semana"}
            buttonInfo={"Gestionar usuarios"}
          />
          <NormalCard
            icon={quote}
            title={"Pagos por verificar"}
            number={"06"}
            description={"$COP 2.304.100,00 en total por verificar"}
            buttonInfo={"Verificar pagos"}
          />
        </section>

        <section className="long-card-container">
          <LongCardTable />
        </section>
      </section>
    </AdminContainer>
  );
}
