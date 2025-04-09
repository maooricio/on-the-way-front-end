"use client";
import InputElement from "@/components/elements/inputs/input";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import { paginateList } from "@/utils/handlers/paginate";
import glass from "@/assets/icons/others/glass.svg";
import { filterDate, filterQuotes } from "@/utils/handlers/filters";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { getAllQuotesRequests } from "@/utils/api/quotes";

export interface ISearch {
  value: string;
}

const QuotesPendingPage = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageRef = useRef<any>(null);

  const initialState: ISearch = {
    value: "",
  };

  const [searchData, setSearchData] = useState<ISearch>(initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allQuotes, setAllQuotes] = useState<IQuote[]>([]);
  const [quotesList, setQuotesList] = useState<IQuote[][]>([]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const fetchAllQuotes = async () => {
    try {
      const res = await getAllQuotesRequests();

      if (res.data.data) {
        const allQuotesData = res.data.data.map((i: IQuote) => {
          return {
            ...i,
            date: filterDate(i.createdAt!),
          };
        });
        setAllQuotes(allQuotesData);
        setQuotesList(paginateList(allQuotesData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filteredQuotes = filterQuotes(allQuotes, searchData.value, "all");

    setQuotesList(filteredQuotes);
    setCurrentPage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  return (
    <section className="quotes-history-container" ref={pageRef}>
      <header className="quotes-history-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Por cotizar</h1>
      </header>

      <section className="quotes-history-handler">
        <div className="quotes-history-register-handler">
          <Link href={Routes.quotes_new} type="button" className="button">
            Nueva cotización
          </Link>
        </div>

        <div className="quotes-history-select-handler"></div>

        <div className="quotes-history-search-handler">
          <InputElement
            type="text"
            label=""
            placeholder="Busca una cotización..."
            name="value"
            setFormData={setSearchData}
            error=""
            value={searchData.value}
            icon={<Image src={glass} alt="glass icon" />}
          />
        </div>
      </section>

      <ul className="custom-list-container to-quote-list">
        <li className="custom-list-header">
          <span className="not-mobile">Fecha</span>
          <span>Cotización</span>
          <span>Cliente</span>
          <span className="not-mobile">Responsable</span>
        </li>

        {quotesList.length > 0 ? (
          quotesList[currentPage - 1].map((item) => {
            return (
              <Link
                href={`${Routes.quotes}/request/${item._id}`}
                key={item._id}
                className="custom-list-row"
              >
                <span className="not-mobile">{item.date}</span>
                <span>{item.quoteNumber}</span>
                <span>{item.user?.companyName}</span>
                <span>
                  <p className="not-mobile">
                    {item.user?.firstName} {item.user?.lastName}
                  </p>

                  <button type="button">Cotizar</button>
                </span>
              </Link>
            );
          })
        ) : (
          <li className="custom-list-row">
            <span>No hay usuarios para mostrar.</span>
          </li>
        )}
      </ul>

      {quotesList.length > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={quotesList.length}
          onPageChange={handlePagination}
        />
      )}
    </section>
  );
};

export default QuotesPendingPage;
