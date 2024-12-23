const LongCardTable = () => {
  const fakeInfo = [
    {
      date: "12/03/2024",
      quote: "00278",
      client: "Juan José Eventos",
      amount: "12.000.42,90",
      state: "En proceso",
    },
    {
      date: "12/03/2024",
      quote: "00158",
      client: "María Suarez",
      amount: "1.902.000,00",
      state: "En proceso",
    },
    {
      date: "10/03/2024",
      quote: "00201",
      client: "Harley Bar",
      amount: "412.000,50",
      state: "Pagada",
    },
    {
      date: "05/03/2024",
      quote: "00210",
      client: "La Yumba S.C",
      amount: "1.200.000,00",
      state: "Pago pendiente",
    },
    {
      date: "10/03/2024",
      quote: "00215",
      client: "Festividades Cabildo",
      amount: "302.550,00",
      state: "Verificar pago",
    },
  ];

  const getDotColor = (state: string): string => {
    switch (state) {
      case "En proceso":
        return "#F59E0B";
      case "Pagada":
        return "#22C55E";
      case "Pago pendiente":
        return "#DCA7F6";
      case "Verificar pago":
        return "#CCCCCC";
      default:
        return "#F59E0B";
    }
  };

  return (
    <section className="long-card-table-container">
      <ul className="long-card-table">
        <li className="long-card-table-header">
          <span>Fecha</span>
          <span>Cotización</span>
          <span>Cliente</span>
          <span>Monto</span>
          <span>Estado</span>
        </li>

        {fakeInfo.map((i, index) => (
          <li key={`${i.quote}`} className="long-card-table-item">
            <span>{i.date}</span>
            <span>{i.quote}</span>
            <span>{i.client}</span>
            <span>{i.amount}</span>
            <span>
              <div className="long-card-last-item">
                <div
                  className="long-card-last-item-dot"
                  style={{ backgroundColor: getDotColor(i.state) }}
                ></div>
                {i.state}
              </div>

              {(index === 1 || index === 2 || index === 4) && (
                <div className="long-card-last-item-amount">
                  {index === 2 ? 2 : 1}
                </div>
              )}
            </span>
          </li>
        ))}
      </ul>

      <footer className="long-card-button-container">
        <button type="button">Ver todas las cotizaciones</button>
      </footer>
    </section>
  );
};

export default LongCardTable;
