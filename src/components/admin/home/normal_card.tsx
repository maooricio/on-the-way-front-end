import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const NormalCard = ({
  header,
  content,
  footer,
}: Props) => {
  return (
    <section className={`normal-card-container`}>
      {header}

      {content}

      {footer}
    </section>
  );
};

export default NormalCard;
