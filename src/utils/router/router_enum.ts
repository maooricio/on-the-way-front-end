export enum Routes {
  // auth
  login = "/auth/login",
  password = "/auth/password",

  // dashboard
  main = "/dashboard",
  quotes = "/dashboard/quotes",
  users = "/dashboard/users",
  settings = "/dashboard/settings",

  // quotes
  quotes_history = "/dashboard/quotes/history",
  quotes_new = "/dashboard/quotes/new",
  to_quote = "/dashboard/quotes/pending",
  request_details = "/dashboard/quotes/request/:id",
  quote_details = "/dashboard/quotes/:id",
  quote_drafts = "/dashboard/quotes/drafts",
  waiting_quote = "/dashboard/quotes/waiting",

  // payment
  payment = "/dashboard/payment",
  payment_card = "/dashboard/payment/card",
  payment_pse = "/dashboard/payment/pse",
  payment_deposit = "/dashboard/payment/deposit",
}
