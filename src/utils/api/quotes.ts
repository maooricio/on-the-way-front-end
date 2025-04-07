import { IQuote } from "../interfaces/quote.interface";
import http from "./http";

const QUOTES_PATH = "quotes";

const createQuotes = (body: IQuote) => {
  console.log({ body });
  return http.post(`${QUOTES_PATH}`, {
    ...body,
    vehicles: body.vehicles.map((i) => ({ ...i, image: i.id })),
    state: "in_progress",
  });
};

export { createQuotes };
