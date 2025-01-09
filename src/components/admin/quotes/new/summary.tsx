import Image from "next/image";
import delete_icon from "@/assets/icons/utils/close_fill.svg";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";
import { Dispatch, SetStateAction } from "react";

interface Props {
  formData: INewQuoteStageTwoForm;
  setFormData: Dispatch<SetStateAction<INewQuoteStageTwoForm>>;
}

const NewQuoteSummary = ({ formData, setFormData }: Props) => {
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

          <p>$250.000,00</p>
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

          <p>$250.000,00</p>
        </div>
      )}

      <p>
        <span>Total:</span>{" "}
        <span>
          $
          {formData.deliveryTransport && formData.collectionTransport
            ? "500,000"
            : formData.deliveryTransport || formData.collectionTransport
            ? "250,000"
            : "00,00"}
        </span>
      </p>
    </section>
  );
};

export default NewQuoteSummary;
