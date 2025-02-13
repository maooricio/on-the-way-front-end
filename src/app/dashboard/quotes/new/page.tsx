"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter, useSearchParams } from "next/navigation";
import NewQuoteStageOne from "@/components/admin/quotes/new/stage_1";
import { useState } from "react";
import NewQuoteStageTwo from "@/components/admin/quotes/new/stage_2";
import NewQuoteStageThree from "@/components/admin/quotes/new/stage_3";
import { IQuote } from "@/utils/interfaces/quote.interface";
import NewQuoteSummary from "@/components/admin/quotes/new/summary";
import NewQuoteStageFour from "@/components/admin/quotes/new/stage_4";
import NewQuoteStageFive from "@/components/admin/quotes/new/stage_5";

const NewQuotePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quote = searchParams.get("quote");

  const initialState: IQuote = {
    userId: "",
    deliveryTransport: undefined,
    collectionTransport: undefined,
    serviceDate: "",
    serviceHour: "00:00",
    pickupCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    collectionAddress: "",
    unloadingCity: "",
    unloadingAdress: "",
    totalPrice: 0,
    vehicles: [],
    operators: [],
    discountVoucher: {
      type: "%",
      amount: 0,
    },
    comment: [],
  };

  const [formData, setFormData] = useState<IQuote>(initialState);
  const [stage, setStage] = useState<number>(!quote ? 0 : 1);

  const handleGoBack = () => {
    if (stage > 0) {
      setStage(stage - 1);
    } else {
      router.back();
    }
  };

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={handleGoBack}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Nueva cotización</h1>
      </header>

      {stage === 0 ? (
        <NewQuoteStageOne
          setStage={setStage}
          setFormQuoteData={setFormData}
          formQuoteData={formData}
        />
      ) : stage === 1 ? (
        <section className="new-quote-content-container">
          <NewQuoteStageTwo
            setStage={setStage}
            formData={formData}
            setFormData={setFormData}
          />

          <NewQuoteSummary formData={formData} setFormData={setFormData} />
        </section>
      ) : stage === 2 ? (
        <section className="new-quote-content-container">
          <NewQuoteStageThree
            setStage={setStage}
            formData={formData}
            setFormData={setFormData}
          />

          <NewQuoteSummary formData={formData} setFormData={setFormData} />
        </section>
      ) : stage === 3 ? (
        <section className="new-quote-content-container">
          <NewQuoteStageFour
            setStage={setStage}
            formData={formData}
            setFormData={setFormData}
          />

          <NewQuoteSummary formData={formData} setFormData={setFormData} />
        </section>
      ) : (
        <NewQuoteStageFive formData={formData} setFormData={setFormData} />
      )}
    </section>
  );
};

export default NewQuotePage;
