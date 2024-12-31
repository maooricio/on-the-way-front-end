"use client";
import InputElement from "@/components/inputs/input";
import { FakeUsersList } from "@/utils/data/fakers";
import { useState } from "react";
import three_dots from "@/assets/icons/dots/three_dots.svg";
import Image from "next/image";
import Pagination from "@/components/elements/handlers/pagination";
import { paginateList } from "@/utils/handlers/paginate";
import CustomSelect from "@/components/elements/handlers/custom_select";

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

  const usersList = paginateList(FakeUsersList);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  }

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
            options={[{
              label: "Mostrar todos los usuarios",
              value: "all"
            },{
              label: "Administrador",
              value: "admin"
            },{
              label: "Cliente",
              value: "customer"
            }]}
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
            icon={<></>}
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

        {usersList[currentPage - 1].map((item) => (
          <li key={item.id} className="users-list-row">
            <span>{item.name}</span>
            <span>{item.company}</span>
            <span>{item.role}</span>
            <span>
              {item.endDate}

              <button type="button">
                <Image src={three_dots} alt="three dots icon" />
              </button>
            </span>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={usersList.length}
        onPageChange={handlePagination}
      />
    </section>
  );
};

export default UsersPage;
