"use client";

import LongCardTable from "@/components/admin/home/long_card";
import AdminMainQuotesFirst from "@/components/admin/quotes/main/first_admin_cards";
import AdminMainQuotesLast from "@/components/admin/quotes/main/last_admin_cards";
import AdminMainQuotesSecond from "@/components/admin/quotes/main/second_admin_cards";
import ClientMainQuotesFirst from "@/components/client/quotes/main/first_client_cards";
import ClientMainQuotesLast from "@/components/client/quotes/main/last_client_cards";
import ClientMainQuotesSecond from "@/components/client/quotes/main/second_client_cards";
import { getUserLogged } from "@/utils/handlers/user_login";
import { IUserLogged } from "@/utils/interfaces/user.interface";
import { useEffect, useState } from "react";

const QuotesMain = () => {
  const [user, setUser] = useState<IUserLogged | undefined>();

  const fetchUserLogged = async () => {
    try {
      const res = await getUserLogged();

      setUser(res);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchUserLogged();
  }, []);

  return user?.role === "admin" ? (
    <>
      <AdminMainQuotesFirst />

      <AdminMainQuotesSecond />

      <AdminMainQuotesLast />
    </>
  ) : (
    <>
      <ClientMainQuotesFirst />

      <ClientMainQuotesSecond />

      <ClientMainQuotesLast />

      <section className="long-card-container" style={{width: "100%", marginBottom: "32px"}}>
        <LongCardTable userRole="client" />
      </section>
    </>
  );
};

export default QuotesMain;
