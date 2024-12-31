import EmailSettings from "@/components/admin/settings/email";
import PasswordSettings from "@/components/admin/settings/password";
import ProfileInfo from "@/components/admin/settings/profile_info";

const SettingsPage = () => {
  return (
    <section className="admin-settings-container">
      <header className="admin-settings-header">
        <h1>Configuraciones</h1>
      </header>

      <ProfileInfo />

      <section className="admin-settings-content">
        <PasswordSettings />
        <EmailSettings email="mariadominguez@gmail.com" />
      </section>
    </section>
  );
};

export default SettingsPage;
