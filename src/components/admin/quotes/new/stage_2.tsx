import InputElement from "@/components/elements/inputs/input";
import { getSquareIcon, getStageIcon } from "@/utils/handlers/get_icon";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import calendar from "@/assets/icons/utils/calendar.svg";
import CustomSelect from "@/components/elements/handlers/custom_select";
import SelectWithInput from "@/components/elements/inputs/select";
import { citiesOptions } from "@/utils/data/cities";

interface Props {
  setStage: Dispatch<SetStateAction<number>>;
}

const NewQuoteStageTwo = ({ setStage }: Props) => {
  const initialState: INewQuoteStageTwoForm = {
    deliveryTransport: false,
    collectionTransport: false,
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
  };

  const [formData, setFormData] = useState<INewQuoteStageTwoForm>(initialState);
  const [serviceHour, setServiceHour] = useState<string>("");

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage(3);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSelect = (payload: any) => {
    setFormData((prev) => ({ ...prev, pickupCity: payload.value }));
  };

  return (
    <section className="new-quote-content-container">
      <section className="new-quote-content">
        <header className="new-quote-stages-container">
          <Image src={getStageIcon(true, true)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(true, false)} alt="stage icon" />
          <span>Información del evento o servicio</span>

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false, false)} alt="stage icon" />

          <div className="new-quote-stage-divider"></div>
          <Image src={getStageIcon(false, false)} alt="stage icon" />
        </header>

        <form className="new-quote-form" onSubmit={handleOnSubmit}>
          <div className="new-quote-form-stage-two-content">
            <div className="new-quote-form-stage-two-row">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    deliveryTransport: !formData.deliveryTransport,
                  }))
                }
              >
                Transporte de entrega:{" "}
                <Image
                  src={getSquareIcon(formData.deliveryTransport)}
                  alt="checkbox icon"
                />
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    collectionTransport: !formData.collectionTransport,
                  }))
                }
              >
                Transporte de recogida:{" "}
                <Image
                  src={getSquareIcon(formData.collectionTransport)}
                  alt="checkbox icon"
                />
              </button>
            </div>

            <div className="new-quote-form-stage-two-row">
              <InputElement
                type="text"
                label="Fecha del servicio"
                placeholder="Selecciona la fecha"
                name="serviceDate"
                setFormData={setFormData}
                error=""
                value={formData.serviceDate}
                icon={<Image src={calendar} alt="calendar icon" />}
              />

              <CustomSelect
                labelName="Hora del servicio"
                options={[
                  {
                    label: "Selecciona la hora",
                    value: "",
                  },
                ]}
                setValue={setServiceHour}
                value={serviceHour}
              />
            </div>

            <SelectWithInput
              labelName="Ciudad de cargue"
              options={citiesOptions}
              setValue={handleOnSelect}
              value={formData.pickupCity}
            />

            <InputElement
              type="text"
              label="Dirección de cargue"
              placeholder="Selecciona la fecha"
              name="serviceDate"
              setFormData={setFormData}
              error=""
              value={formData.serviceDate}
              icon={<></>}
            />

            <InputElement
              type="text"
              label="Dirección de entrega"
              placeholder="Selecciona la fecha"
              name="serviceDate"
              setFormData={setFormData}
              error=""
              value={formData.serviceDate}
              icon={<></>}
            />

            <InputElement
              type="text"
              label="Dirección de recogida"
              placeholder="Selecciona la fecha"
              name="serviceDate"
              setFormData={setFormData}
              error=""
              value={formData.serviceDate}
              icon={<></>}
            />

            <SelectWithInput
              labelName="Ciudad de descargue"
              options={[
                {
                  label: "Busca la ciudad",
                  value: "",
                },
              ]}
              setValue={handleOnSelect}
              value={formData.pickupCity}
            />

            <InputElement
              type="text"
              label="Dirección de descargue"
              placeholder="Selecciona la fecha"
              name="serviceDate"
              setFormData={setFormData}
              error=""
              value={formData.serviceDate}
              icon={<></>}
            />
          </div>

          <footer className="new-quote-form-footer">
            <Link href={Routes.quotes} className="button">
              Cancelar cotización
            </Link>
            <Link href={Routes.quotes} className="button">
              Guardar en borradores
            </Link>
            <button type="submit">Continuar</button>
          </footer>
        </form>
      </section>

      <section className="new-quote-summary-container">
        <h2>Resumen de cotización</h2>

        <p>
          <span>Total:</span> <span>${"00,00"}</span>
        </p>
      </section>
    </section>
  );
};

export default NewQuoteStageTwo;
