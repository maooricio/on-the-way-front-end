"use client";
import React, { useState } from "react";
import PasswordModal from "./password_modal";
import Loader from "@/assets/images/loader";
import Image from "next/image";
import lock from "@/assets/icons/others/lock.svg";

const PasswordSettings = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <article className="admin-settings-handler-container">
        <div className="admin-settings-handler-header">
          <span>Contraseña</span>
          <Image src={lock} alt="lock icon" />
        </div>

        <p>Actualiza tu contraseña para mayor seguridad de tu cuenta.</p>

        <button onClick={() => setShowModal(true)}>Cambiar contraseña</button>
      </article>

      {showModal && (
        <PasswordModal
          setIsLoading={setIsLoading}
          setShowModal={setShowModal}
        />
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default PasswordSettings;
