"use client";
import InputElement from "@/components/inputs/input";
import { FakeUsersList, IFakeUser } from "@/utils/data/fakers";
import { useEffect, useState } from "react";
import three_dots from "@/assets/icons/dots/three_dots.svg";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import { paginateList } from "@/utils/handlers/paginate";
import CustomSelect from "@/components/elements/handlers/custom_select";
import { usersRoleOptions } from "@/utils/data/users";
import { getRole } from "@/utils/handlers/get_role";
import glass from "@/assets/icons/others/glass.svg";
import { filterUsers } from "@/utils/handlers/filters";

export interface ISearch {
  value: string;
}

const UsersPage = () => {
  const initialState: ISearch = {
    value: "",
  };
  const [searchData, setSearchData] = useState<ISearch>(initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [usersList, setUsersList] = useState<IFakeUser[][]>(
    paginateList(FakeUsersList)
  );

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const filteredUsers = filterUsers(
      FakeUsersList,
      searchData.value,
      roleFilter
    );

    setUsersList(filteredUsers);
    setCurrentPage(1);
  }, [roleFilter, searchData]);

  return (
    <section className="admin-users-container">
      <header className="admin-users-header">
        <h1>Gestión de usuarios</h1>
      </header>

      <section className="admin-users-handler">
        <div className="user-register-handler">
          <button type="button">Registrar usuario</button>
        </div>

        <div className="user-select-handler">
          <CustomSelect
            options={usersRoleOptions}
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

      <ul className="users-list-container">
        <li className="users-list-header">
          <span>Nombre y Apellido</span>
          <span>Razón Social</span>
          <span>Rol</span>
          <span>Fecha de alta</span>
        </li>

        {usersList.length > 0 ? (
          usersList[currentPage - 1].map((item) => (
            <li key={item.id} className="users-list-row">
              <span>{item.name}</span>
              <span>{item.company}</span>
              <span>{getRole(item.role)}</span>
              <span>
                {item.endDate}

                <button type="button">
                  <Image src={three_dots} alt="three dots icon" />
                </button>
              </span>
            </li>
          ))
        ) : (
          <li className="users-list-row">
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
    </section>
  );
};

export default UsersPage;
