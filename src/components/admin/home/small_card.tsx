import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const SmallCard = ({ header, content, footer }: Props) => {
  return (
    <section className={`small-card-container`}>
      {header}

      {content}

      {footer}
    </section>
  );
};

export default SmallCard;
