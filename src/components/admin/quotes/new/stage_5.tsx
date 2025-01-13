"use client";
import { FakeUsersList } from "@/utils/data/fakers";
import { getStageIcon } from "@/utils/handlers/get_icon";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Routes } from "@/utils/router/router_enum";
import Image from "next/image";
import Link from "next/link";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import { formatCurrency } from "@/utils/handlers/currency";
import delete_icon from "@/assets/icons/utils/close_fill.svg";
import { IVehicles } from "@/utils/interfaces/vehicles.interface";
import minus from "@/assets/icons/utils/minus.svg";
import plus from "@/assets/icons/utils/plus.svg";
import { IOperator } from "@/utils/interfaces/operator.interface";
import ticket from "@/assets/icons/others/ticket.svg";
import ChangeCustomerModal from "../change_customer";
import AddDiscountVoucherModal from "../add_discount_voucher";
interface Props {
  setStage: Dispatch<SetStateAction<number>>;
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteStageFive = ({ setStage, formData, setFormData }: Props) => {
  const userSelected = FakeUsersList.find((i) => i.id === formData.userId);

  const [price, setPrice] = useState<number>(0);
  const [showCustomerModal, setShowCustomerModal] = useState<boolean>(false);
  const [showDiscountModal, setShowDiscountModal] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData((prev) => prev);
    setStage(4);
  };

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
    <section className="new-quote-content">
      <header className="new-quote-stages-container">
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, true)} alt="stage icon" />

        <div className="new-quote-stage-divider"></div>
        <Image src={getStageIcon(true, false)} alt="stage icon" />
        <span>Resumen</span>
      </header>

      <form className="new-quote-form" onSubmit={handleOnSubmit}>
        <div className="new-quote-resume">
          <p>Revisa que esté todo bien:</p>

          {userSelected && (
            <div className="new-quote-resume-customer">
              <div className="user-photo-container">
                <Image src={otw_logo} alt="user photo" className="user-photo" />
              </div>

              <div className="new-quote-resume-customer-content">
                <div className="new-quote-resume-customer-content-title">
                  <p>{userSelected.company}</p>
                  <p>Carrera 43 No, 201 - 78. Of 199, Cundinamarca</p>
                </div>

                <p>
                  Persona responsable: {userSelected.firstName}{" "}
                  {userSelected.lastName}
                </p>
              </div>

              <button type="button" onClick={() => setShowCustomerModal(true)}>
                Cambiar cliente
              </button>
            </div>
          )}

          {formData.deliveryTransport && (
            <div className="new-quote-summary-item">
              <div className="new-quote-summary-item-header">
                <h1>Transporte de entrega</h1>
                <span>25/05/2024 a las 23:00 h.</span>
              </div>

              <p>{formatCurrency(250000)}</p>

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
          )}

          {formData.collectionTransport && (
            <div className="new-quote-summary-item">
              <div className="new-quote-summary-item-header">
                <h1>Transporte de recogida</h1>
                <span>28/05/2024 a las 09:00 h.</span>
              </div>

              <p>{formatCurrency(250000)}</p>

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
          )}

          {formData.vehicles.length > 0 &&
            formData.vehicles.map((item) => (
              <div key={item.id} className="new-quote-summary-item">
                <div className="new-quote-summary-item-header">
                  <h1>Vehículo {item.name}</h1>
                  <span>{item.weight}</span>
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

                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      vehicles: formData.vehicles.filter(
                        (i) => i.id !== item.id
                      ),
                    }))
                  }
                >
                  <Image src={delete_icon} alt="delete icon" />
                </button>
              </div>
            ))}

          {formData.operators.length > 0 &&
            formData.operators.map((item) => (
              <div key={item.id} className="new-quote-summary-item">
                <div className="new-quote-summary-item-header">
                  <h1>{item.name}</h1>
                  <span>-</span>
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
            ))}

          <div className="new-quote-resume-footer">
            {formData.discountVoucher.amount === 0 ? (
              <button type="button" onClick={() => setShowDiscountModal(true)} className="discount-button">
                <Image src={ticket} alt="ticket icon" />
                Aplicar cupón de descuento
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    discountVoucher: { type: "%", amount: 0 },
                  }))
                }
                className="discount-button delete-button"
              >
                Eliminar cupón de descuento
              </button>
            )}

            {formData.discountVoucher.amount === 0 ? (
              <p>
                <span>Total:</span> <span>{formatCurrency(price)}</span>
              </p>
            ) : (
              <div className="new-quote-summary-with-discount">
                <p>
                  <span>Subtotal:</span>{" "}
                  <span className="text-regular">{formatCurrency(price)}</span>
                </p>
                <p>
                  <span>Descuento:</span>{" "}
                  <span className="text-regular">
                    {formData.discountVoucher.type === "%"
                      ? `${formData.discountVoucher.amount}%`
                      : formatCurrency(formData.discountVoucher.amount)}
                  </span>
                </p>
                <p>
                  <span>Total:</span>{" "}
                  <span>
                    {formatCurrency(
                      formData.discountVoucher.type === "%"
                        ? price -
                            price * (formData.discountVoucher.amount / 100)
                        : price - formData.discountVoucher.amount
                    )}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <footer className="new-quote-form-footer">
          <Link href={Routes.quotes} className="button">
            Cancelar cotización
          </Link>
          <Link href={Routes.quotes} className="button">
            Guardar en borradores
          </Link>
          <button type="submit" disabled={true}>
            Continuar
          </button>
        </footer>
      </form>

      {showCustomerModal && (
        <ChangeCustomerModal
          setShowModal={setShowCustomerModal}
          setFormQuoteData={setFormData}
        />
      )}

      {showDiscountModal && (
        <AddDiscountVoucherModal
          setShowModal={setShowDiscountModal}
          setFormData={setFormData}
        />
      )}
    </section>
  );
};

export default NewQuoteStageFive;
