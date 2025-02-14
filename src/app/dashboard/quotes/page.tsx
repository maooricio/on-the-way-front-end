import QuotesMain from "@/components/main/quotes/quotes_main";

const QuotesPage = async () => {
  return (
    <section className="admin-quotes-container">
      <header className="admin-quotes-header">
        <h1>Cotizaciones</h1>
      </header>

      <QuotesMain />
    </section>
  );
};

export default QuotesPage;
