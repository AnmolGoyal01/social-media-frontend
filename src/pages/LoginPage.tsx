import React from "react";
import { useNavigate } from "react-router-dom";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (credentials: { email: string; password: string }) => {
    console.log("Login Data: ", credentials);
    // Call login API and handle response here
  };

  return (
    <AuthFormWrapper
      title="Login to Your Account"
      footerText="Don't have an account?"
      footerLink="Sign Up"
      footerAction={() => navigate("/signup")}
    >
      <LoginForm onSubmit={handleLogin} />
    </AuthFormWrapper>
  );
};

export default LoginPage;
