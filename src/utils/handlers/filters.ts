import { FakeUsersList } from "../data/fakers";
import { IQuote } from "../interfaces/quote.interface";
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
  quotes: IQuote[],
  search: string,
  role: string
) => {
  const allQuotes = [...quotes];
  const searchValue = search.toLowerCase().trim();
  const roleValue = role;

  let filteredQuotes: IQuote[] = [...quotes];

  // filter to role
  if (roleValue !== "all") {
    filteredQuotes = allQuotes.filter(
      (i) => i.state?.toLowerCase() === roleValue.toLowerCase()
    );
  }

  // filter to search value
  if (searchValue.length > 0) {
    filteredQuotes = filteredQuotes.filter((i) => {
      const user = FakeUsersList.find((u) => u.id === i.userId);
      const customer = `${user?.firstName} ${user?.lastName}`;

      return (
        customer.toLowerCase().includes(searchValue) ||
        i.quoteNumber?.toLowerCase().includes(searchValue)
      );
    });
  }

  return paginateList(filteredQuotes);
};
