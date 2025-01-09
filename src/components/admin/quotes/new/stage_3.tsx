import { VehiclesData } from "@/utils/data/vehicles";
import { getStageIcon } from "@/utils/handlers/get_icon";
import Image from "next/image";
import { Dispatch, FormEvent, SetStateAction } from "react";
import empty from "@/assets/icons/checkbox/square_empty.svg";
import fill from "@/assets/icons/checkbox/square_fill.svg";
import NewQuoteSummary from "./summary";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import { IVehicles } from "@/utils/interfaces/vehicles.interface";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteStageThree = ({ setStage, formData, setFormData }: Props) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage(3);
  };

  const handleOnSelect = (vehicle: IVehicles) => {
    const isSelected = formData.vehicles.find((i) => i.id === vehicle.id);

    setFormData((prev) => ({
      ...prev,
      vehicles: isSelected
        ? formData.vehicles.filter((item) => item.id !== vehicle.id)
        : [...formData.vehicles, vehicle],
    }));
  };

  return (
    <section className="new-quote-content-container">
      <section className="new-quote-content">
        <header className="new-quote-stages-container">
          <Image src={getStageIcon(true, true)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(true, true)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(true, false)} alt="stage icon" />
          <span>Información de vehículo</span>

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false, false)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false, false)} alt="stage icon" />
        </header>

        <form onSubmit={handleOnSubmit} className="new-quote-form-vehicles">
          <p>Escoja a continuación el tipo de vehículo que necesita:</p>

          {VehiclesData.map((i) => (
            <div
              key={i.id}
              className={`new-quote-vehicle-container ${
                formData.vehicles.includes(i)
                  ? "new-quote-vehicle-container-selected"
                  : ""
              }`}
              onClick={() => handleOnSelect(i)}
            >
              <div className="new-quote-vehicle-header">
                <span>{i.name}</span>

                <button>
                  <Image
                    src={formData.vehicles.includes(i) ? fill : empty}
                    alt="checkbox icon"
                  />
                </button>
              </div>

              <div className="new-quote-vehicle-icon">
                <Image src={i.image} alt="vehicle icon" />
              </div>

              <div className="new-quote-vehicle-info">
                <h3>{i.weight}</h3>

                <span>
                  {i.sizes.length === 0
                    ? "Paquetes pequeños"
                    : `Largo: ${
                        Array.isArray(i.sizes.length)
                          ? `${i.sizes.length[0]}m a ${i.sizes.length[1]}m`
                          : `${i.sizes.length}m`
                      } | Ancho: ${i.sizes.width}m | Alto: ${i.sizes.height}m`}
                </span>
              </div>
            </div>
          ))}

          <footer className="new-quote-form-footer">
            <Link href={Routes.quotes} className="button">
              Cancelar cotización
            </Link>
            <Link href={Routes.quotes} className="button">
              Guardar en borradores
            </Link>
            <button type="submit" disabled={formData.vehicles.length === 0}>
              Continuar
            </button>
          </footer>
        </form>
      </section>

      <NewQuoteSummary formData={formData} setFormData={setFormData} />
    </section>
  );
};

export default NewQuoteStageThree;
