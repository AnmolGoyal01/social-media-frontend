import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import LoginForm from "@/components/auth/LoginForm";
import { authService } from "@/backend-connection";
import { useDispatch } from '../../node_modules/react-redux/src/hooks/useDispatch';
import { login } from "@/redux/slices/userSlice";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>(null);

  const handleLogin = (credentials: {
    email: string;
    username: string;
    password: string;
  }) => {
    setErrors(null);
    const callApi = async () => {
      try {
        const loggedInUser = await authService.login(
          credentials.email,
          credentials.username,
          credentials.password
        );
        if (loggedInUser) {
          const loginDetails = loggedInUser?.data?.user
          dispatch(login(loginDetails));
          navigate("/");
        }
      } catch (error) {
        setErrors(error?.message);
      }
    };
    callApi();
  };

  return (
    <AuthFormWrapper
      title="Login to Your Account"
      footerText="Don't have an account?"
      footerLink="Sign Up"
      footerAction={() => navigate("/signup")}
      errors={errors}
    >
      <LoginForm onSubmit={handleLogin} />
    </AuthFormWrapper>
  );
};

export default LoginPage;
