"use client";
import { userIsLogin } from "@/utils/handlers/user_login";
import ProfilePhoto from "./profile_photo";

const ProfileInfo = () => {
  const user = userIsLogin();

  return (
    <section className="admin-settings-info">
      <ProfilePhoto user={user!} />
    </section>
  );
};

export default ProfileInfo;
