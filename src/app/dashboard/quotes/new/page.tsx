"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import NewQuoteStageOne from "@/components/admin/quotes/new/stage_1";
import { useState } from "react";
import NewQuoteStageTwo from "@/components/admin/quotes/new/stage_2";

const NewQuotePage = () => {
  const router = useRouter();

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
        <h1>Historial de cotizaciones</h1>
      </header>

      {stage === 0 ? (
        <NewQuoteStageOne setStage={setStage} />
      ) : stage === 1 ? (
        <NewQuoteStageTwo setStage={setStage} />
      ) : stage === 2 ? (
        <></>
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
