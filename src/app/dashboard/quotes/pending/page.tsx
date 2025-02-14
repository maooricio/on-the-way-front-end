"use client";
import InputElement from "@/components/elements/inputs/input";
import { FakeQuotesList, FakeUsersList } from "@/utils/data/fakers";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import { paginateList } from "@/utils/handlers/paginate";
import glass from "@/assets/icons/others/glass.svg";
import { filterQuotes } from "@/utils/handlers/filters";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import { IQuote } from "@/utils/interfaces/quote.interface";

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
  const [quotesList, setQuotesList] = useState<IQuote[][]>(
    paginateList(FakeQuotesList),
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const filteredQuotes = filterQuotes(
      FakeQuotesList,
      searchData.value,
      "all",
    );

    setQuotesList(filteredQuotes);
    setCurrentPage(1);
  }, [searchData]);

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
            const user = FakeUsersList.find((i) => i.id === item.userId);

            return (
              <Link
                href={`${Routes.quotes}/request/${item.id}`}
                key={item.id}
                className="custom-list-row"
              >
                <span className="not-mobile">{item.date}</span>
                <span>{item.quoteNumber}</span>
                <span>{user?.company}</span>
                <span>
                  <p className="not-mobile">
                    {user?.firstName} {user?.lastName}
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
