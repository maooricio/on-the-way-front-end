import AdminMainQuotesFirst from "@/components/admin/quotes/main/first_admin_cards";
import AdminMainQuotesSecond from "@/components/admin/quotes/main/second_admin_cards";
import AdminMainQuotesLast from "@/components/admin/quotes/main/last_admin_cards";

const QuotesPage = () => {
  // const user = getUserLogged();

  return (
    <section className="admin-quotes-container">
      <header className="admin-quotes-header">
        <h1>Cotizaciones</h1>
      </header>

      {/* {user?.role === "admin" ? (
        <>
          <AdminMainQuotesFirst />
    
          <AdminMainQuotesSecond />
    
          <AdminMainQuotesLast />
        </>
      ) : ( */}
        <>
          <AdminMainQuotesFirst />
    
          <AdminMainQuotesSecond />
    
          <AdminMainQuotesLast />
        </>
      {/* )} */}

    </section>
  );
};

export default QuotesPage;
