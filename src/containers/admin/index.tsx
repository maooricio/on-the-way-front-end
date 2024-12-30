import { ReactNode } from "react";
import Navbar from "../../components/elements/navbar";
import { Suspense } from "react";

interface Props {
  children: ReactNode;
}

const AdminContainer = ({ children }: Props) => {
  return (
    <main className="admin-container">
      <Navbar />
      <Suspense>
        <section className="admin-content-container">{children}</section>
      </Suspense>
    </main>
  );
};

export default AdminContainer;
