"use client";
import { getStageIcon } from "@/utils/handlers/get_icon";
import { IQuote, IQuoteUserInfo } from "@/utils/interfaces/quote.interface";
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
import InputElement from "@/components/elements/inputs/input";
import { useRouter } from "next/navigation";
import { createQuotes, editQuote } from "@/utils/api/quotes";
import Loader from "@/assets/images/loader";
import { getCustomers } from "@/utils/api/users";
import { IUser } from "@/utils/interfaces/user.interface";

export interface IComment {
  comment: string;
}
interface Props {
  formData: IQuote;
  setFormData: Dispatch<SetStateAction<IQuote>>;
  quoteToEdit: string | null;
}

const NewQuoteStageFive = ({ formData, setFormData, quoteToEdit }: Props) => {
  const router = useRouter();

  const [price, setPrice] = useState<number>(0);
  const [showCustomerModal, setShowCustomerModal] = useState<boolean>(false);
  const [showDiscountModal, setShowDiscountModal] = useState<boolean>(false);
  const [comment, setComment] = useState<{ comment: string }>({ comment: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userSelected, setUserSelected] = useState<IQuoteUserInfo | undefined>(
    formData.user
  );

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!quoteToEdit) {
        const res = await createQuotes({
          ...formData,
          totalPrice:
            formData.discountVoucher.type === "%"
              ? price - price * (formData.discountVoucher.amount / 100)
              : price - formData.discountVoucher.amount,
          vehicles: formData.vehicles.map((i) => ({
            name: i.name,
            imageId: i.imageId,
            weight: i.weight,
            price: i.price,
            amount: i.amount,
            sizes: i.sizes,
          })),
        });

        if (!res.data.data) {
          return;
        }

        router.replace(Routes.quotes_history);
      } else {
        const res = await editQuote(quoteToEdit, formData);

        if (!res.data.data) {
          return;
        }

        router.replace(Routes.quotes_history);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          if (item._id === focusItem._id) {
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
          if (item._id === focusItem._id) {
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

  const getUserSelected = async () => {
    try {
      const res = await getCustomers();

      if (!res.data.data) {
        return;
      }

      const user = res.data.data.find((i: IUser) => i.id === formData.userId);

      setUserSelected({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        companyName: user.companyName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculatePrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    getUserSelected();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <p>{userSelected.companyName}</p>
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
                    deliveryTransport: "",
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
                    collectionTransport: "",
                  }))
                }
              >
                <Image src={delete_icon} alt="delete icon" />
              </button>
            </div>
          )}

          {formData.vehicles.length > 0 &&
            formData.vehicles.map((item, index) => (
              <div
                key={`${item.name}: ${item.imageId} - ${index}`}
                className="new-quote-summary-item"
              >
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
                        (i) => i.imageId !== item.imageId
                      ),
                    }))
                  }
                >
                  <Image src={delete_icon} alt="delete icon" />
                </button>
              </div>
            ))}

          {formData.operators.length > 0 &&
            formData.operators.map((item, index) => (
              <div
                key={`${item.name}: ${item._id} - ${index}`}
                className="new-quote-summary-item"
              >
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

          {!quoteToEdit && (
            <InputElement
              type="textarea"
              label=""
              placeholder="Añade una nota o comentario para el cliente..."
              name="comment"
              setFormData={setComment}
              error=""
              value={comment.comment}
              icon={<></>}
            />
          )}

          <div className="new-quote-resume-footer">
            {formData.discountVoucher.amount === 0 ? (
              <button
                type="button"
                onClick={() => setShowDiscountModal(true)}
                className="discount-button"
              >
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
          <button type="submit">
            {!quoteToEdit ? "Enviar" : "Editar"} cotización
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

      {isLoading && <Loader />}
    </section>
  );
};

export default NewQuoteStageFive;
