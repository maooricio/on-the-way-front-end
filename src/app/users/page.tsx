import AdminContainer from "@/containers/admin";
import React from "react";

const UsersPage = () => {
  return (
    <AdminContainer>
      <section className="admin-home-container">
        <header className="admin-home-header">
          <h1>Gestión de usuarios</h1>
        </header>
      </section>
    </AdminContainer>
  );
};

export default UsersPage;
