"use client";
import PasswordChange from "@/components/auth/password/change";
import PasswordCode from "@/components/auth/password/code";
import PasswordEmail from "@/components/auth/password/email";
import AuthContainer from "@/containers/auth";
import { useState } from "react";

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
