import { ReactNode } from "react";
import auth_screen from "../../assets/images/auth_screen.png";
import useScreenWidth from "../../utils/hooks/use_screen_width";

const AuthContainer = ({ children }: { children: ReactNode }) => {
  const width = useScreenWidth();

  return (
    <main className="auth-container">
      <section className="auth-content">
        {width > 860 && (
          <div className="auth-screen-container">
            <img src={auth_screen} alt="auth screen image" />
          </div>
        )}

        {children}
      </section>

      <footer className="auth-footer">
        Nunca compartas tus datos personales, claves y números de tarjetas con
        nadie.
      </footer>
    </main>
  );
};

export default AuthContainer;
