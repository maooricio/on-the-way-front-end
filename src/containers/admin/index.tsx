"use client";
import { ReactNode } from "react";
import Navbar from "../../components/elements/navbar";

interface Props {
  children: ReactNode;
}

const AdminContainer = ({ children }: Props) => {
  return (
    <main className="admin-container">
      <Navbar />
      <section className="admin-content-container">{children}</section>
    </main>
  );
};

export default AdminContainer;
