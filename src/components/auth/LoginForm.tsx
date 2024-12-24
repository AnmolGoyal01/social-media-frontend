import React, { useState } from "react";

type LoginFormProps = {
  onSubmit: (credentials: { identifier: string; password: string }) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loginWith, setLoginWith] = useState<"username" | "email">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ identifier, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="identifier" className="block text-sm font-medium">
          {loginWith === "email" ? "Email" : "Username"}
        </label>
        <input
          type="text"
          id="identifier"
          placeholder={
            loginWith === "email" ? "Enter your email" : "Enter your username"
          }
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-black"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm  dark:bg-black"
          required
        />
      </div>

      <div className="flex justify-end text-sm">
        <button
          type="button"
          onClick={() =>
            setLoginWith((prev) => (prev === "email" ? "username" : "email"))
          }
          className="text-blue-500 underline"
        >
          {loginWith === "email" ? "Use Username Instead" : "Use Email Instead"}
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 hover:bg-blue-600 py-2 text-white"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
