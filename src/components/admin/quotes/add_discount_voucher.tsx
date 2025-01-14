import Image from "next/image";
import close from "@/assets/icons/utils/close.svg";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import InputElement from "@/components/elements/inputs/input";
import empty from "@/assets/icons/checkbox/circle_empty.svg";
import fill from "@/assets/icons/checkbox/circle_fill.svg";
import { parseCurrency, parsePercentage } from "@/utils/handlers/currency";

interface IVoucherData {
  type: string;
  amount: number;
}

export interface IVoucherAmount {
  amount: string;
}

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const AddDiscountVoucherModal = ({ setShowModal, setFormData }: Props) => {
  const initialState: IVoucherData = {
    type: "%",
    amount: 0,
  };
  const [voucherData, setVoucherData] = useState<IVoucherData>(initialState);
  const [discount, setDiscount] = useState<IVoucherAmount>({ amount: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      discountVoucher: {
        type: voucherData.type,
        amount: Number(voucherData.amount),
      },
    }));
    setShowModal(false);
  };

  const setDiscountAmount = () => {
    const isPercentage = voucherData.type === "%";
    const amount =
      voucherData.type === "%"
        ? parsePercentage(discount.amount)
        : parseCurrency(discount.amount);

    if (isNaN(amount)) {
      setDiscount({ amount: "0" });
      return;
    }

    if (isPercentage && amount > 100) {
      setVoucherData((prev) => ({ ...prev, amount: 100 }));
      setDiscount({ amount: "100" });
      return;
    }

    setVoucherData((prev) => ({ ...prev, amount }));
  };

  useEffect(() => {
    if (discount.amount.length > 0) {
      setDiscountAmount();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discount]);

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className="generic-modal-header">
          <h1>Aplicar cupón de descuento</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>Elige el tipo y descuento que deseas realizar al cliente:</p>

          <div className="discount-voucher-type-select">
            <button
              type="button"
              onClick={() => setVoucherData((prev) => ({ ...prev, type: "%" }))}
            >
              <Image
                src={voucherData.type === "%" ? fill : empty}
                alt="checkbox icon"
              />
              Descuento en %
            </button>

            <button
              type="button"
              onClick={() => setVoucherData((prev) => ({ ...prev, type: "$" }))}
            >
              <Image
                src={voucherData.type === "$" ? fill : empty}
                alt="checkbox icon"
              />
              Descuento en $COP
            </button>
          </div>

          <InputElement
            type="text"
            label=""
            placeholder="Ingresa el descuento"
            name="amount"
            setFormData={setDiscount}
            error=""
            value={discount.amount}
            icon={<></>}
          />
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button type="submit" disabled={discount.amount.length === 0}>
            Cambiar cliente
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddDiscountVoucherModal;
