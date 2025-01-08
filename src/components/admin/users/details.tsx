"use client";
import { IUser } from "@/utils/interfaces/user.interface";
import Image from "next/image";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import close from "@/assets/icons/utils/close.svg";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import { getRole } from "@/utils/handlers/get_role";
import DeleteUser from "./delete";

interface Props {
  user: IUser;
  setShowForm: Dispatch<SetStateAction<IUser | undefined>>;
}

const UserDetails = ({ user, setShowForm }: Props) => {
  const [showDeleteUser, setShowDeleteUser] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(undefined);
  };

  return (
    <section className="generic-modal">
      <div
        className="generic-modal-background"
        onClick={() => setShowForm(undefined)}
      ></div>

      <form onSubmit={handleOnSubmit}>
        <div className="generic-modal-header">
          <h1>Detalles de usuario</h1>

          <button
            type="button"
            onClick={() => setShowForm(undefined)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div
          className={`user-details-content ${
            user.role === "customer" && "user-details-content-with-overflow"
          }`}
        >
          <div className="user-details-row">
            <div className="user-photo-container">
              <Image src={otw_logo} alt="user photo" className="user-photo" />
            </div>
          </div>

          <div className="user-details-row">
            <p>
              Rol <span>{getRole(user.role!)}</span>
            </p>
          </div>

          {user.role === "admin" && (
            <>
              <div className="user-details-row">
                <p>
                  Nombre <span>{user.firstName}</span>
                </p>
                <p>
                  Apellido <span>{user.lastName}</span>
                </p>
              </div>

              <div className="user-details-row">
                <p>
                  Email <span>{user.email}</span>
                </p>
              </div>
            </>
          )}

          {user.role === "customer" && (
            <>
              <div className="user-details-row">
                <p>
                  Razón social <span>{user.company}</span>
                </p>
              </div>

              <div className="user-details-row">
                <p>
                  Tipo de documento de la empresa <span>{user.firstName}</span>
                </p>
                <p>
                  Número de documento de la empresa <span>{user.lastName}</span>
                </p>
              </div>

              <div className="user-details-row">
                <p>
                  Nombre de la persona responsable <span>{user.firstName}</span>
                </p>
                <p>
                  Apellido de la persona responsable{" "}
                  <span>{user.lastName}</span>
                </p>
              </div>

              <div className="user-details-row">
                <p>
                  Email <span>{user.firstName}</span>
                </p>
                <p>
                  Teléfono <span>{user.lastName}</span>
                </p>
              </div>

              <div className="user-details-row">
                <p>
                  Ciudad <span>{user.firstName}</span>
                </p>
                <p>
                  Dirección <span>{user.lastName}</span>
                </p>
              </div>
            </>
          )}
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowDeleteUser(true)}>
            Eliminar usuario
          </button>
          <button type="button">Editar información</button>
          <button type="submit">Aceptar</button>
        </div>
      </form>

      {showDeleteUser && (
        <DeleteUser
          user={user}
          setShowModal={setShowDeleteUser}
          setShowDetails={setShowForm}
        />
      )}
    </section>
  );
};

export default UserDetails;
