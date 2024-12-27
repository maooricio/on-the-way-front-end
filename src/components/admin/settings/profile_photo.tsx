"use client";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import { IUser } from "@/utils/interfaces/user.interface";
import Image from "next/image";
import { useRef, useState } from "react";
import pen_white from "@/assets/icons/utils/pen_white.svg";
import Loader from "@/assets/images/loader";

interface Props {
  user: IUser;
}

const ProfilePhoto = ({ user }: Props) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const fileInput = useRef<any>(null);

  const [showPicOptions, setShowPicOptions] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleDeleteProfilePicture = async () => {
    try {
      setisLoading(true);
      setShowPicOptions(false);

      //   await deleteProfilePicture();
      //   updateDataOfUser();
    } finally {
      setisLoading(false);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    try {
      setisLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      //   await updateProfilePicture(formData);

      event.target.value = "";

      //   await updateDataOfUser();
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section className="photo-container">
      <div className="image-container">
        <Image
          src={user?.photo ?? otw_logo}
          alt="user photo"
          priority
          className={`${user?.photo ? "" : "not-has-photo"}`}
        />
      </div>

      <button
        type="button"
        onClick={() => setShowPicOptions(!showPicOptions)}
        onBlur={() => setTimeout(() => setShowPicOptions(false), 100)}
      >
        <Image src={pen_white} alt="edit icon" />
      </button>

      {showPicOptions && (
        <ul className="photo-options">
          <li
            onClick={() => {
              setShowPicOptions(false);
              fileInput.current.click();
            }}
            className="hover"
          >
            Cambiar foto
          </li>
          <li onClick={handleDeleteProfilePicture} className="hover">
            Eliminar foto
          </li>
        </ul>
      )}

      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {isLoading && <Loader />}
    </section>
  );
};

export default ProfilePhoto;
