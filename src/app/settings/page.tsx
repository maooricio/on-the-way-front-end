import AdminContainer from "@/containers/admin";
import React from "react";

const SettingsPage = () => {
  return (
    <AdminContainer>
      <section className="admin-home-container">
        <header className="admin-home-header">
          <h1>Configuraciones</h1>
        </header>
      </section>
    </AdminContainer>
  );
};

export default SettingsPage;
