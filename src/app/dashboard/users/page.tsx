"use client";
import InputElement from "@/components/elements/inputs/input";
import { useEffect, useRef, useState } from "react";
import three_dots from "@/assets/icons/dots/three_dots.svg";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";
import { getRole } from "@/utils/handlers/get_role";
import glass from "@/assets/icons/others/glass.svg";
import { filterDate, filterUsers } from "@/utils/handlers/filters";
import RegisterForm from "@/components/admin/users/register";
import { IUser, IUserLogged } from "@/utils/interfaces/user.interface";
import UserDetails from "@/components/admin/users/details";
import { getAllUsers } from "@/utils/api/users";
import { getUserLogged } from "@/utils/handlers/user_login";
import Loader from "@/assets/images/loader";

export interface ISearch {
  value: string;
}

const UsersPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageRef = useRef<any>(null);

  const initialState: ISearch = {
    value: "",
  };

  const [searchData, setSearchData] = useState<ISearch>(initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [userSelected, setUserSelected] = useState<IUser | undefined>();
  const [allDefaultUsers, setAllDefaultUsers] = useState<IUser[]>([]);
  const [usersList, setUsersList] = useState<IUser[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  const [user, setUser] = useState<IUserLogged | undefined>();

  const fetchUserLogged = async () => {
    try {
      const res = await getUserLogged();

      setUser(res);
    } catch (error) {
      console.log({ error });
    }
  };

  const getUsers = async (userId: string) => {
    setIsLoading(true);

    try {
      const res = await getAllUsers(userId);

      setAllDefaultUsers(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const handleGetUsers = () => {
    getUsers(user?.id ?? "");
  };

  useEffect(() => {
    if (user) {
      getUsers(user.id!);
    } else {
      fetchUserLogged();
    }
  }, [user]);

  useEffect(() => {
    const filteredUsers = filterUsers(
      allDefaultUsers,
      searchData.value,
      roleFilter,
    );

    setUsersList(filteredUsers);
    setCurrentPage(1);
  }, [roleFilter, searchData, allDefaultUsers]);

  return (
    <section className="admin-users-container" ref={pageRef}>
      <header className="admin-users-header">
        <h1>Gestión de usuarios</h1>
      </header>

      <section className="admin-users-handler">
        <div className="user-register-handler">
          <button type="button" onClick={() => setShowRegisterForm(true)}>
            Registrar usuario
          </button>
        </div>

        <div className="user-select-handler">
          <CustomSelect
            options={[
              {
                label: "Mostrar todos los usuarios",
                value: "all",
              },
              ...usersRoleOptions,
            ]}
            setValue={setRoleFilter}
            value={roleFilter}
          />
        </div>

        <div className="user-search-handler">
          <InputElement
            type="text"
            label=""
            placeholder="Busca un usuario..."
            name="value"
            setFormData={setSearchData}
            error=""
            value={searchData.value}
            icon={<Image src={glass} alt="glass icon" />}
          />
        </div>
      </section>

      <ul className="custom-list-container">
        <li className="custom-list-header">
          <span>Nombre y Apellido</span>
          <span className="not-mobile">Razón Social</span>
          <span>Rol</span>
          <span>Fecha de alta</span>
        </li>

        {usersList.length > 0 ? (
          usersList[currentPage - 1].map((item) => (
            <li
              key={item.id}
              className="custom-list-row"
              onClick={() => setUserSelected(item)}
            >
              <span>
                {item.firstName} {item.lastName}
              </span>
              <span className="not-mobile">{item.companyName ?? "-"}</span>
              <span>{getRole(item.role!)}</span>
              <span>
                {item.createdAt ? filterDate(item.createdAt) : "-"}

                <button type="button">
                  <Image src={three_dots} alt="three dots icon" />
                </button>
              </span>
            </li>
          ))
        ) : (
          <li className="custom-list-row">
            <span>No hay usuarios para mostrar.</span>
          </li>
        )}
      </ul>

      {usersList.length > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={usersList.length}
          onPageChange={handlePagination}
        />
      )}

      {userSelected && (
        <UserDetails
          user={userSelected}
          setShowForm={setUserSelected}
          setUserData={setUserSelected}
          handleGetUsers={handleGetUsers}
        />
      )}

      {showRegisterForm && (
        <RegisterForm
          setShowForm={setShowRegisterForm}
          handleGetUsers={handleGetUsers}
        />
      )}

      {isLoading && <Loader />}
    </section>
  );
};

export default UsersPage;
