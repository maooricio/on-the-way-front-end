"use client";
import EmailSettings from "@/components/admin/settings/email";
import PasswordSettings from "@/components/admin/settings/password";
import ProfileInfo from "@/components/admin/settings/profile_info";
import { getUserLogged } from "@/utils/handlers/user_login";
import { IUser } from "@/utils/interfaces/user.interface";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();

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

  return (
    <section className="admin-settings-container">
      <header className="admin-settings-header">
        <h1>Configuraciones</h1>
      </header>

      <ProfileInfo userInfo={userInfo} setUserInfo={setUserInfo} />

      <section className="admin-settings-content">
        <PasswordSettings />
        <EmailSettings email={userInfo?.email} />
      </section>
    </section>
  );
};

export default SettingsPage;
