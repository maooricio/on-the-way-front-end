interface Props {
  icon?: string;
  number: string;
  title: string;
  description: string;
  buttonInfo: string;
}

const SmallCard = ({ icon, number, title, description, buttonInfo }: Props) => {
  return (
    <section className={`small-card-container ${icon ? "has-icon" : ""}`}>
      <header className="small-card-header">
        {!icon ? (
          <span className="small-card-header-item">{number}</span>
        ) : (
          <img src={icon} alt="" className="small-card-header-item" />
        )}
      </header>

      <div className="small-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button type="button">{buttonInfo}</button>
    </section>
  );
};

export default SmallCard;
