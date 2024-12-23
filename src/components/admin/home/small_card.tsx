import Image from "next/image";

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
          <Image src={icon} alt="" className="small-card-header-item" />
        )}
      </header>

      <div className="small-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <footer className="small-card-button-container">
        <button type="button">{buttonInfo}</button>
      </footer>
    </section>
  );
};

export default SmallCard;
