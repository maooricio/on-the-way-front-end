import { IQuote, IQuoteToEdit } from "../interfaces/quote.interface";
import http from "./http";

const QUOTES_PATH = "quotes";

const createQuotes = (body: IQuote) => {
  return http.post(`${QUOTES_PATH}`, {
    ...body,
    state: "in_progress",
  });
};

const getAllQuotes = () => {
  return http.get(`${QUOTES_PATH}`);
};

const getAllQuotesRequests = () => {
  return http.get(`${QUOTES_PATH}/requests`);
};

const getAllQuotesDrafts = () => {
  return http.get(`${QUOTES_PATH}/drafts`);
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

const editQuote = (quoteId: string, body: IQuoteToEdit) => {
  return http.patch(`${QUOTES_PATH}/${quoteId}`, body);
};

const saveQuoteDraft = (body: IQuote) => {
  return http.post(`${QUOTES_PATH}`, {
    ...body,
    state: "draft",
  });
};

export {
  createQuotes,
  getAllQuotes,
  getQuoteDetails,
  addComment,
  editQuote,
  getAllQuotesRequests,
  saveQuoteDraft,
  getAllQuotesDrafts,
};
