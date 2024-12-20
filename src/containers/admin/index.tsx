import { ReactNode } from "react";
import Navbar from "../../components/elements/navbar";

const AdminContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className="admin-container">
      <Navbar />
      <section className="admin-content-container">{children}</section>
    </main>
  );
};

export default AdminContainer;
