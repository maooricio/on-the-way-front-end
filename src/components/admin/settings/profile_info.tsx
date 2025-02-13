"use client";
import ProfilePhoto from "./profile_photo";
import pen from "@/assets/icons/utils/pen.svg";
import Image from "next/image";
import { IUser } from "@/utils/interfaces/user.interface";
import { useEffect, useState } from "react";
import { getUserLogged } from "@/utils/handlers/user_login";
import SettingsSkeleton from "@/components/suspenses/settings";
import EditProfileModal from "./edit_profile";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<IUser>();
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const fetchUserLogged = async () => {
    try {
      const res = await getUserLogged();

      setUserInfo(res);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchUserLogged();
  }, []);

  if (!userInfo) {
    return <SettingsSkeleton />;
  }

  return (
    <section className="admin-settings-info">
      <ProfilePhoto user={userInfo} />

      <section className="admin-settings-profile-info">
        <div className="profile-info-header-container">
          <h5>
            {userInfo?.firstName.toUpperCase()}{" "}
            {userInfo?.lastName.toUpperCase()}
          </h5>

          <button type="button" onClick={() => setShowEditModal(true)}>
            <Image src={pen} alt="edit icon" />
          </button>
        </div>

        <span>Administrador</span>
      </section>

      {showEditModal && (
        <EditProfileModal
          setShowModal={setShowEditModal}
          setUserData={setUserInfo}
          userData={userInfo}
        />
      )}
    </section>
  );
};

export default ProfileInfo;
