import { IQuote } from "../interfaces/quote.interface";
import http from "./http";

const QUOTES_PATH = "quotes";

const createQuotes = (body: IQuote) => {
  return http.post(`${QUOTES_PATH}`, {
    ...body,
    vehicles: body.vehicles.map((i) => ({ ...i, image: i.id })),
    state: "in_progress",
  });
};

const getAllQuotes = () => {
  return http.get(`${QUOTES_PATH}`);
};

const getQuoteDetails = (quoteId: string | string[]) => {
  return http.get(`${QUOTES_PATH}/${quoteId}`);
};

const addComment = (quoteId: string, comment: string, userId: string) => {
  return http.post(`${QUOTES_PATH}/${quoteId}`, {
    userId,
    comment,
  });
};

export { createQuotes, getAllQuotes, getQuoteDetails, addComment };
