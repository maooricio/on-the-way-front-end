import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  number: string;
  description: string;
  buttonInfo: string;
}

const NormalCard = ({
  icon,
  number,
  title,
  description,
  buttonInfo,
}: Props) => {
  return (
    <section className={`normal-card-container`}>
      <header className="normal-card-header">
        <h3>{title}</h3>
        <Image src={icon} alt="" className="normal-card-header-item" />
      </header>

      <div className="normal-card-content">
        <h3>{number}</h3>
        <p>{description}</p>
      </div>

      <footer className="normal-card-button-container">
        <button type="button">{buttonInfo}</button>
      </footer>
    </section>
  );
};

export default NormalCard;
