"use client";
import ProfilePhoto from "./profile_photo";
import pen from "@/assets/icons/utils/pen.svg";
import Image from "next/image";
import user_photo from "@/assets/images/user_photo.jpg";
import Loader from "@/assets/images/loader";
import { IUser } from "@/utils/interfaces/user.interface";
import { useEffect, useState } from "react";
import { userIsLogin } from "@/utils/handlers/user_login";


const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<IUser>();

  useEffect(() => {
    const user = userIsLogin();

    setUserInfo(user!);
  }, [])

  if (!userInfo) {
    return <Loader />
  }

  return (
    <section className="admin-settings-info">
      <ProfilePhoto user={{...userInfo!, photo: user_photo}} />

      <section className="admin-settings-profile-info">
        <div className="profile-info-header-container">
          <h5>
            {userInfo?.firstName.toUpperCase()} {userInfo?.lastName.toUpperCase()}
          </h5>

          <button type="button">
            <Image src={pen} alt="edit icon" />
          </button>
        </div>

        <span>Administrador</span>
      </section>
    </section>
  );
};

export default ProfileInfo;
