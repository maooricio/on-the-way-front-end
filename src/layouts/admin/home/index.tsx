import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../utils/handlers/user_login";

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate(0);
  };

  return (
    <section>
      <h1>home</h1>
      <button onClick={handleLogout}>logout</button>
    </section>
  );
};

export default AdminHome;
