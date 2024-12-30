"use client";
import InputElement from "@/components/inputs/input";
import React, { useState } from "react";

export interface ISearch {
  value: string;
}

const UsersPage = () => {
  const initialState: ISearch = {
    value: ""
  }
  const [searchData, setSearchData] = useState<ISearch>(initialState);

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
          <select>
            <option value="1">Mostrar todos los usuarios</option>
          </select>
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
    </section>
  );
};

export default UsersPage;
