import ProfileInfo from "@/components/admin/settings/profile_info";
import AdminContainer from "@/containers/admin";

const SettingsPage = () => {
  return (
    <AdminContainer>
      <section className="admin-settings-container">
        <header className="admin-settings-header">
          <h1>Configuraciones</h1>
        </header>

        <ProfileInfo />
      </section>
    </AdminContainer>
  );
};

export default SettingsPage;
