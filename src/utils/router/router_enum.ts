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
  request_details = "/dashboard/quotes/pending/:id"
  
}
