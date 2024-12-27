import Image from "next/image";
import React from "react";
import at_sign from "@/assets/icons/others/at_sign.svg";

interface Props {
  email: string;
}

const EmailSettings = ({ email }: Props) => {
  return (
    <article className="admin-settings-handler-container">
      <div className="admin-settings-handler-header">
        <span>Email</span>
        <Image src={at_sign} alt="at sign icon" />
      </div>

      <span className="current-email">{email}</span>

      <p>
        Si necesita cambiar tu correo electrónico, ponte en contacto con el
        Servicio de Atención al Cliente.
      </p>
    </article>
  );
};

export default EmailSettings;
