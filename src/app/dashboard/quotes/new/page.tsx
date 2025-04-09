"use client";
import Image from "next/image";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter, useSearchParams } from "next/navigation";
import NewQuoteStageOne from "@/components/admin/quotes/new/stage_1";
import { useEffect, useState } from "react";
import NewQuoteStageTwo from "@/components/admin/quotes/new/stage_2";
import NewQuoteStageThree from "@/components/admin/quotes/new/stage_3";
import { IQuote } from "@/utils/interfaces/quote.interface";
import NewQuoteSummary from "@/components/admin/quotes/new/summary";
import NewQuoteStageFour from "@/components/admin/quotes/new/stage_4";
import NewQuoteStageFive from "@/components/admin/quotes/new/stage_5";
import { getQuoteDetails, saveQuoteDraft } from "@/utils/api/quotes";
import { Routes } from "@/utils/router/router_enum";
import Loader from "@/assets/images/loader";
import { getUserLogged } from "@/utils/handlers/user_login";
import { IUserLogged } from "@/utils/interfaces/user.interface";

const NewQuotePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quote = searchParams.get("quote");

  const initialState: IQuote = {
    userId: "",
    deliveryTransport: "",
    collectionTransport: "",
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUserLogged | undefined>();

  const handleGoBack = () => {
    if (stage > 0) {
      setStage(stage - 1);
    } else {
      router.back();
    }
  };

  const fetchUserLogged = async () => {
    setIsLoading(true);

    try {
      const res = await getUserLogged();

      setUser(res);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuoteDetails = async () => {
    try {
      if (quote) {
        const res = await getQuoteDetails(quote);

        setFormData({
          ...res.data.data,
          totalPrice: 0,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const saveDraft = async () => {
    setIsLoading(true);

    try {
      const res = await saveQuoteDraft(formData);

      if (!res.data.data) {
        return;
      }

      router.push(Routes.quote_drafts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quote]);

  useEffect(() => {
    if (!user) {
      fetchUserLogged();
    } else {
      if (user.role === "customer") {
        setStage(1);
        setFormData((prev) => ({
          ...prev,
          userId: user.id,
        }));
      }
    }
  }, [user]);

  return (
    <section className="new-quote-container">
      <header className="new-quote-header">
        <button onClick={handleGoBack}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>{!quote ? "Nueva" : "Editar"} cotización</h1>
      </header>
      {user !== undefined && (
        <>
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
                saveDraft={saveDraft}
              />

              <NewQuoteSummary formData={formData} setFormData={setFormData} />
            </section>
          ) : stage === 2 ? (
            <section className="new-quote-content-container">
              <NewQuoteStageThree
                setStage={setStage}
                formData={formData}
                setFormData={setFormData}
                saveDraft={saveDraft}
              />

              <NewQuoteSummary formData={formData} setFormData={setFormData} />
            </section>
          ) : stage === 3 ? (
            <section className="new-quote-content-container">
              <NewQuoteStageFour
                setStage={setStage}
                formData={formData}
                setFormData={setFormData}
                saveDraft={saveDraft}
              />

              <NewQuoteSummary formData={formData} setFormData={setFormData} />
            </section>
          ) : (
            <NewQuoteStageFive
              formData={formData}
              setFormData={setFormData}
              quoteToEdit={quote}
              saveDraft={saveDraft}
            />
          )}
        </>
      )}

      {isLoading && <Loader />}
    </section>
  );
};

export default NewQuotePage;
