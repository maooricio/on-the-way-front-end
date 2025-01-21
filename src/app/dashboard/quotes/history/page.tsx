"use client";
import InputElement from "@/components/elements/inputs/input";
import { FakeQuotesList, FakeUsersList } from "@/utils/data/fakers";
import { useEffect, useRef, useState } from "react";
import three_dots from "@/assets/icons/dots/three_dots.svg";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import { paginateList } from "@/utils/handlers/paginate";
import CustomSelect from "@/components/elements/handlers/custom_select";
import glass from "@/assets/icons/others/glass.svg";
import { filterQuotes } from "@/utils/handlers/filters";
import { quotesFilterOptions } from "@/utils/data/quotes";
import back from "@/assets/icons/arrow/arrow_back.svg";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Routes } from "@/utils/router/router_enum";
import { IQuote } from "@/utils/interfaces/quote.interface";
import { formatCurrency } from "@/utils/handlers/currency";
import { getStateColor } from "@/utils/handlers/get_state_color";

export interface ISearch {
  value: string;
}

const QuotesHistoryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const state = searchParams.get("state");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageRef = useRef<any>(null);

  const initialState: ISearch = {
    value: "",
  };

  const [searchData, setSearchData] = useState<ISearch>(initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [stateFilter, setStateFilter] = useState<string>(state ?? "all");
  const [quotesList, setQuotesList] = useState<IQuote[][]>(
    paginateList(FakeQuotesList)
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const filteredQuotes = filterQuotes(
      FakeQuotesList,
      searchData.value,
      stateFilter
    );

    setQuotesList(filteredQuotes);
    setCurrentPage(1);
  }, [stateFilter, searchData]);

  return (
    <section className="quotes-history-container" ref={pageRef}>
      <header className="quotes-history-header">
        <button onClick={() => router.back()}>
          <Image src={back} alt="arrow back icon" />
        </button>
        <h1>Historial de cotizaciones</h1>
      </header>

      <section className="quotes-history-handler">
        <div className="quotes-history-register-handler">
          <Link href={Routes.quotes_new} type="button" className="button">
            Nueva cotización
          </Link>
        </div>

        <div className="quotes-history-select-handler">
          <CustomSelect
            options={quotesFilterOptions}
            setValue={setStateFilter}
            value={stateFilter}
          />
        </div>

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

      <ul className="custom-list-container">
        <li className="custom-list-header">
          <span className="only-mobile">Fecha</span>
          <span>Cotización</span>
          <span>Cliente</span>
          <span className="only-mobile">Monto</span>
          <span>Estado</span>
        </li>

        {quotesList.length > 0 ? (
          quotesList[currentPage - 1].map((item) => {
            const user = FakeUsersList.find((i) => i.id === item.userId);
            const quoteState = quotesFilterOptions.find(
              (i) => i.value === item.state
            );

            return (
              <Link
                href={`${Routes.quotes}/${item.id}`}
                key={item.id}
                className="custom-list-row"
              >
                <span className="only-mobile">{item.date}</span>
                <span>{item.quoteNumber}</span>
                <span>
                  {user?.firstName} {user?.lastName}
                </span>
                <span className="only-mobile">
                  {formatCurrency(item.totalPrice)}
                </span>
                <span>
                  <div className="custom-list-state">
                    <div
                      className="custom-list-state-dot"
                      style={{ backgroundColor: getStateColor(item.state!) }}
                    ></div>
                    <p className="only-mobile">{quoteState?.label}</p>
                  </div>

                  <button type="button">
                    <Image src={three_dots} alt="three dots icon" />
                  </button>
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

export default QuotesHistoryPage;
