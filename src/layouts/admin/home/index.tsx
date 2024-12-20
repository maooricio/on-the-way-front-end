import SmallCard from "../../../components/admin/home/small_card";
import AdminContainer from "../../../containers/admin";
import calculator from "../../../assets/icons/utils/calculator.svg";

const AdminHome = () => {
  return (
    <AdminContainer>
      <section className="admin-home-container">
        <header className="admin-home-container">
          <h1>Inicio</h1>
        </header>

        <section className="small-cards-contaiener">
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

        <section className="">

        </section>
      </section>
    </AdminContainer>
  );
};

export default AdminHome;
