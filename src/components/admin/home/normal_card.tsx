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
    <section className={`normal-card-container ${icon ? "has-icon" : ""}`}>
      <header className="normal-card-header">
        <h3>{title}</h3>
        <Image src={icon} alt="" className="normal-card-header-item" />
      </header>

      <div className="normal-card-content">
        <span>{number}</span>
        <p>{description}</p>
      </div>

      <button type="button">{buttonInfo}</button>
    </section>
  );
};

export default NormalCard;
