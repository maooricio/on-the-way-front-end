"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import NewQuoteStageOne from "@/components/admin/quotes/new/stage_1";
import { useState } from "react";
import NewQuoteStageTwo from "@/components/admin/quotes/new/stage_2";
import NewQuoteStageThree from "@/components/admin/quotes/new/stage_3";
import { INewQuoteStageTwoForm } from "@/utils/interfaces/new_quote.interface";

const NewQuotePage = () => {
  const router = useRouter();

  const initialState: INewQuoteStageTwoForm = {
    userId: "",
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
    totalPrice: 0,
    vehicles: [],
  };

  const [formData, setFormData] = useState<INewQuoteStageTwoForm>(initialState);
  const [stage, setStage] = useState<number>(0);

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
        <NewQuoteStageOne setStage={setStage} setFormQuoteData={setFormData} />
      ) : stage === 1 ? (
        <NewQuoteStageTwo
          setStage={setStage}
          formData={formData}
          setFormData={setFormData}
        />
      ) : stage === 2 ? (
        <NewQuoteStageThree
          setStage={setStage}
          formData={formData}
          setFormData={setFormData}
        />
      ) : stage === 3 ? (
        <></>
      ) : stage === 4 ? (
        <></>
      ) : (
        <></>
      )}
    </section>
  );
};

export default NewQuotePage;
