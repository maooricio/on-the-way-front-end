import { IFakeQuote, IFakeUser } from "../data/fakers";
import { paginateList } from "./paginate";

export const filterUsers = (
  users: IFakeUser[],
  search: string,
  role: string
) => {
  const allUsers = [...users];
  const searchValue = search.toLowerCase().trim();
  const roleValue = role;

  let filteredUsers: IFakeUser[] = [...users];

  // filter to role
  if (roleValue !== "all") {
    filteredUsers = allUsers.filter(
      (i) => i.role.toLowerCase() === roleValue.toLowerCase()
    );
  }

  // filter to search value
  if (searchValue.length > 0) {
    filteredUsers = filteredUsers.filter((i) =>
      i.name.toLowerCase().includes(searchValue)
    );
  }

  return paginateList(filteredUsers);
};

export const filterQuotes = (
  users: IFakeQuote[],
  search: string,
  role: string
) => {
  const allQuotes = [...users];
  const searchValue = search.toLowerCase().trim();
  const roleValue = role;

  let filteredQuotes: IFakeQuote[] = [...users];

  // filter to role
  if (roleValue !== "all") {
    filteredQuotes = allQuotes.filter(
      (i) => i.state.toLowerCase() === roleValue.toLowerCase()
    );
  }

  // filter to search value
  if (searchValue.length > 0) {
    filteredQuotes = filteredQuotes.filter(
      (i) =>
        i.customer.toLowerCase().includes(searchValue) ||
        i.quote.toLowerCase().includes(searchValue)
    );
  }

  return paginateList(filteredQuotes);
};
