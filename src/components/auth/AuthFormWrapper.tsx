import React from "react";

type AuthFormWrapperProps = {
  title: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: string;
  errors?: string;
  footerAction: () => void;
};

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  children,
  footerText,
  footerLink,
  errors = "",
  footerAction,
}) => {
  return (
    <div className="w-full mx-auto mt-16 max-w-md rounded-md border p-6 shadow-md">
      <h1 className="mb-4 text-center text-2xl font-semibold">{title}</h1>
      {children}
      <div className="mt-4 text-center text-sm">
        {errors && <div className="text-red-600 mb-2 text-base">{errors}</div>}
        {footerText}{" "}
        <button
          onClick={footerAction}
          className="text-blue-500 hover:text-black dark:hover:text-white underline"
        >
          {footerLink}
        </button>
      </div>
    </div>
  );
};

export default AuthFormWrapper;
