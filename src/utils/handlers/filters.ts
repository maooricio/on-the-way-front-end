import { IFakeUser } from "../data/fakers";
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
