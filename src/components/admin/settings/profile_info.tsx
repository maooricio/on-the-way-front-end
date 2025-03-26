"use client";
import ProfilePhoto from "./profile_photo";
import pen from "@/assets/icons/utils/pen.svg";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import SettingsSkeleton from "@/components/suspenses/settings";
import EditProfileModal from "./edit_profile";
import { IUser } from "@/utils/interfaces/user.interface";

interface Props {
  userInfo: IUser | undefined;
  setUserInfo: Dispatch<SetStateAction<IUser | undefined>>;
}

const ProfileInfo = ({ userInfo, setUserInfo }: Props) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

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
