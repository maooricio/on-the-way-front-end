import Image from "next/image";
import delete_icon from "@/assets/icons/utils/close_fill.svg";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Dispatch, SetStateAction } from "react";
import { formatCurrency } from "@/utils/handlers/currency";
import plus from "@/assets/icons/utils/plus.svg";
import minus from "@/assets/icons/utils/minus.svg";
import { IVehicles } from "@/utils/interfaces/vehicles.interface";

interface Props {
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteSummary = ({ formData, setFormData }: Props) => {
  const handleCounter = (type: string, vehicle: IVehicles) => {
    setFormData((prev) => ({
      ...prev,
      vehicles: formData.vehicles.map((item) => {
        if (item.id === vehicle.id) {
          return {
            ...item,
            amount: type === "plus" ? item.amount + 1 : item.amount - 1,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  const calculatePrice = () => {
    const vehicles = [...formData.vehicles];
    let price = formData.totalPrice;

    if (vehicles.length > 0) {
      for (let i = 0; i < vehicles.length; i++) {
        const vehiclePrice = vehicles[i].price * vehicles[i].amount;

        price += vehiclePrice
      }
    }

    return price
  }

  return (
    <section className="new-quote-summary-container">
      <h2>Resumen de cotización</h2>

      {formData.deliveryTransport && (
        <div className="new-quote-summary-item">
          <div className="new-quote-summary-item-header">
            <h1>Transporte de entrega</h1>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  deliveryTransport: false,
                }))
              }
            >
              <Image src={delete_icon} alt="delete icon" />
            </button>
          </div>

          <span>25/05/2024 a las 23:00 h.</span>

          <p>{formatCurrency(250000)}</p>
        </div>
      )}

      {formData.collectionTransport && (
        <div className="new-quote-summary-item">
          <div className="new-quote-summary-item-header">
            <h1>Transporte de recogida</h1>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  collectionTransport: false,
                }))
              }
            >
              <Image src={delete_icon} alt="delete icon" />
            </button>
          </div>

          <span>28/05/2024 a las 09:00 h.</span>

          <p>{formatCurrency(250000)}</p>
        </div>
      )}

      {formData.vehicles.length > 0 &&
        formData.vehicles.map((item) => (
          <div key={item.id} className="new-quote-summary-item">
            <div className="new-quote-summary-item-header">
              <h1>Vehículo {item.name}</h1>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    vehicles: formData.vehicles.filter((i) => i.id !== item.id),
                  }))
                }
              >
                <Image src={delete_icon} alt="delete icon" />
              </button>
            </div>

            <div className="new-quote-summary-item-handler">
              <div className="counter-handler">
                <button
                  type="button"
                  onClick={() => handleCounter("minus", item)}
                  disabled={item.amount === 1}
                >
                  <Image src={minus} alt="minus icon" />
                </button>
                {item.amount}
                <button
                  type="button"
                  onClick={() => handleCounter("plus", item)}
                >
                  <Image src={plus} alt="plus icon" />
                </button>
              </div>
              <p>{formatCurrency(item.price * item.amount)}</p>
            </div>
          </div>
        ))}

      <p>
        <span>Total:</span> <span>{formatCurrency(calculatePrice())}</span>
      </p>
    </section>
  );
};

export default NewQuoteSummary;
