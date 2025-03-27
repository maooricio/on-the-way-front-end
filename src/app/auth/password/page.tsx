"use client";
import PasswordChange from "@/components/auth/password/change";
import PasswordCode from "@/components/auth/password/code";
import PasswordEmail from "@/components/auth/password/email";
import { useState } from "react";

const PasswordPage = () => {
  const [stage, setStage] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const getStage = () => {
    switch (stage) {
      case 0:
        return <PasswordEmail setStage={setStage} setEmail={setEmail} />;
      case 1:
        return <PasswordCode setStage={setStage} email={email} />;
      case 2:
        return <PasswordChange email={email} />;
      default:
        return;
    }
  };

  return <section className="auth-form-container">{getStage()}</section>;
};

export default PasswordPage;
