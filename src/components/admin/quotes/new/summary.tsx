"use client";
import Image from "next/image";
import delete_icon from "@/assets/icons/utils/close_fill.svg";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatCurrency } from "@/utils/handlers/currency";
import plus from "@/assets/icons/utils/plus.svg";
import minus from "@/assets/icons/utils/minus.svg";
import { IVehicles } from "@/utils/interfaces/vehicles.interface";
import { IOperator } from "@/utils/interfaces/operator.interface";

interface Props {
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteSummary = ({ formData, setFormData }: Props) => {
  const [price, setPrice] = useState<number>(0);

  const handleCounter = (
    type: string,
    focusItem: IVehicles | IOperator,
    focus: string
  ) => {
    if (focus === "isOperator") {
      setFormData((prev) => ({
        ...prev,
        operators: formData.operators.map((item) => {
          if (item.id === focusItem.id) {
            return {
              ...item,
              amount: type === "plus" ? item.amount + 1 : item.amount - 1,
            };
          } else {
            return item;
          }
        }),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        vehicles: formData.vehicles.map((item) => {
          if (item.id === focusItem.id) {
            return {
              ...item,
              amount: type === "plus" ? item.amount + 1 : item.amount - 1,
            };
          } else {
            return item;
          }
        }),
      }));
    }
  };

  const calculatePrice = () => {
    const vehicles = [...formData.vehicles];
    const operators = [...formData.operators];
    const hasDelivery = formData.deliveryTransport;
    const hasCollection = formData.collectionTransport;

    let price = formData.totalPrice;

    if (hasDelivery) {
      price += 250000;
    }

    if (hasCollection) {
      price += 250000;
    }

    if (vehicles.length > 0) {
      for (let i = 0; i < vehicles.length; i++) {
        const vehiclePrice = vehicles[i].price * vehicles[i].amount;

        price += vehiclePrice;
      }
    }

    if (operators.length > 0) {
      for (let i = 0; i < operators.length; i++) {
        const operatorPrice = operators[i].price * operators[i].amount;

        price += operatorPrice;
      }
    }

    setPrice(price);
  };

  useEffect(() => {
    calculatePrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

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
                  onClick={() => handleCounter("minus", item, "isVehicle")}
                  disabled={item.amount === 1}
                >
                  <Image src={minus} alt="minus icon" />
                </button>
                {item.amount}
                <button
                  type="button"
                  onClick={() => handleCounter("plus", item, "isVehicle")}
                >
                  <Image src={plus} alt="plus icon" />
                </button>
              </div>
              <p>{formatCurrency(item.price * item.amount)}</p>
            </div>
          </div>
        ))}

      {formData.operators.length > 0 &&
        formData.operators.map((item) => (
          <div key={item.id} className="new-quote-summary-item">
            <div className="new-quote-summary-item-header">
              <h1>{item.name}</h1>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    operators: formData.operators.filter(
                      (i) => i.id !== item.id
                    ),
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
                  onClick={() => handleCounter("minus", item, "isOperator")}
                  disabled={item.amount === 1}
                >
                  <Image src={minus} alt="minus icon" />
                </button>
                {item.amount}
                <button
                  type="button"
                  onClick={() => handleCounter("plus", item, "isOperator")}
                >
                  <Image src={plus} alt="plus icon" />
                </button>
              </div>
              <p>{formatCurrency(item.price * item.amount)}</p>
            </div>
          </div>
        ))}

      <p>
        <span>Total:</span> <span>{formatCurrency(price)}</span>
      </p>
    </section>
  );
};

export default NewQuoteSummary;
