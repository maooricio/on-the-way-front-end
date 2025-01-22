import Image from "next/image";
import { Dispatch, FormEvent, SetStateAction } from "react";
import close from "@/assets/icons/utils/close.svg";
import { IUser } from "@/utils/interfaces/user.interface";
import { getRole } from "@/utils/handlers/get_role";
import otw_logo from "@/assets/images/otw_only_logo.svg";

interface Props {
  user: IUser;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowDetails?: Dispatch<SetStateAction<IUser | undefined>>;
}

const DeleteUser = ({ user, setShowModal, setShowDetails }: Props) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(false);
    setShowDetails!(undefined);
  };

  return (
    <section className="generic-modal delete-user-container">
      <div
        className="generic-modal-background"
        onClick={() => setShowModal(false)}
      ></div>

      <form onSubmit={handleOnSubmit}>
        <div className="generic-modal-header">
          <h1>Eliminar usuario</h1>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <Image src={close} alt="" />
          </button>
        </div>

        <div className="generic-modal-content">
          <p>¿Estás seguro que deseas eliminar el usuario?</p>

          <div className="delete-user-content">
            <div className="user-photo-container">
              <Image src={otw_logo} alt="user photo" className="user-photo" />
            </div>

            <div className="delete-user-info">
              <h3>
                {user.firstName} {user.lastName}
              </h3>

              <span>{getRole(user.role!)}</span>
            </div>
          </div>
        </div>

        <div className="generic-modal-buttons">
          <button type="button" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
          <button type="submit" className="delete-button">
            Sí, eliminar
          </button>
        </div>
      </form>
    </section>
  );
};

export default DeleteUser;
