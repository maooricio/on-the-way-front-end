"use client";

import { useState } from "react";
import PasswordEmail from "../../../components/auth/password/email";
import PasswordCode from "../../../components/auth/password/code";
import PasswordChange from "../../../components/auth/password/change";
import AuthContainer from "../../../containers/auth";

const PasswordPage = () => {
  const [stage, setStage] = useState<number>(0);

  const getStage = () => {
    switch (stage) {
      case 0:
        return <PasswordEmail setStage={setStage} />;
      case 1:
        return <PasswordCode setStage={setStage} />;
      case 2:
        return <PasswordChange />;
      default:
        return;
    }
  };

  return (
    <AuthContainer>
      <section className="auth-form-container">{getStage()}</section>
    </AuthContainer>
  );
};

export default PasswordPage;
