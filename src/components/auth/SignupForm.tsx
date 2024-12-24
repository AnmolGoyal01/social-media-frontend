import React, { useState } from "react";

type SignupFormProps = {
  onSubmit: (details: {
    username: string;
    email: string;
    fullName: string;
    password: string;
    avatar?: File;
  }) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, email, fullName, password, avatar });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium" >
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-black"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-black"
          required
        />
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-black"
          required
        />
      </div>

      <div>
        <label htmlFor="avatar" className="block text-sm font-medium">
          Avatar (Optional)
        </label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm"
        />
        {avatar && (
          <p className="mt-1 text-sm text-gray-500">Selected: {avatar.name}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 hover:bg-blue-600 py-2 text-white"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
