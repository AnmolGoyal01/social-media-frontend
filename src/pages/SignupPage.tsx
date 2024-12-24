import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import SignupForm from "@/components/auth/SignupForm";
import { authService } from "@/backend-connection";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/userSlice";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>(null);

  const handleSignup = (details: {
    email: string;
    password: string;
    username: string;
    fullName: string;
    avatar?: File;
  }) => {
    setErrors(null);
    console.log(details);
    const callApi = async () => {
      try {
        const user = await authService.register(
          details.email,
          details.username,
          details.password,
          details.fullName,
          details.avatar
        );
        dispatch(login(user.data));
        navigate("/");
      } catch (error) {
        console.error("Signup failed:", error);
        setErrors(error?.message);
      }
    };
    callApi();
  };

  return (
    <AuthFormWrapper
      title="Create a New Account"
      footerText="Already have an account?"
      footerLink="Login"
      footerAction={() => navigate("/login")}
      errors={errors || ""}
    >
      <SignupForm onSubmit={handleSignup} />
    </AuthFormWrapper>
  );
};

export default SignupPage;
