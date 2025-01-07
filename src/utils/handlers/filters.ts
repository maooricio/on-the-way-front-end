import { IFakeQuote } from "../data/fakers";
import { IUser } from "../interfaces/user.interface";
import { paginateList } from "./paginate";

export const filterUsers = (users: IUser[], search: string, role: string) => {
  const allUsers = [...users];
  const searchValue = search.toLowerCase().trim();
  const roleValue = role;

  let filteredUsers: IUser[] = [...users];

  // filter to role
  if (roleValue !== "all") {
    filteredUsers = allUsers.filter(
      (i) => i.role?.toLowerCase() === roleValue.toLowerCase()
    );
  }

  // filter to search value
  if (searchValue.length > 0) {
    filteredUsers = filteredUsers.filter((i) => {
      const name = `${i.firstName} ${i.lastName}`;

      return name.toLowerCase().includes(searchValue);
    });
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
