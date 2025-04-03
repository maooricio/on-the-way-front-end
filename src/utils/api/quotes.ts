import { IQuote } from "../interfaces/quote.interface";
import http from "./http";

const QUOTES_PATH = "quotes";

const createQuotes = (body: IQuote) => {
  return http.post(`${QUOTES_PATH}`, body);
};

export { createQuotes };
