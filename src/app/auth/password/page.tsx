"use client";
import PasswordChange from "@/components/auth/password/change";
import PasswordCode from "@/components/auth/password/code";
import PasswordEmail from "@/components/auth/password/email";
import AuthContainer from "@/containers/auth";
import { userIsLogin } from "@/utils/handlers/user_login";
import { Routes } from "@/utils/router/router_enum";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const PasswordPage = () => {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);

  const checkAuth = async () => {
    const isAuthenticated = await userIsLogin();

    if (isAuthenticated) {
      redirect(Routes.main);
    } else {
      setIsValidated(true);
    }
  };

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

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    isValidated && (
      <AuthContainer>
        <section className="auth-form-container">{getStage()}</section>
      </AuthContainer>
    )
  );
};

export default PasswordPage;
