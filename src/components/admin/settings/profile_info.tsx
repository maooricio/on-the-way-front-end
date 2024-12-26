"use client";
import { userIsLogin } from "@/utils/handlers/user_login";
import ProfilePhoto from "./profile_photo";
import pen from "@/assets/icons/utils/pen.svg";
import Image from "next/image";

const ProfileInfo = () => {
  const user = userIsLogin();

  return (
    <section className="admin-settings-info">
      <ProfilePhoto user={user!} />

      <section className="admin-settings-profile-info">
        <div className="profile-info-header-container">
          <h5>
            {user?.firstName.toUpperCase()} {user?.lastName.toUpperCase()}
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
