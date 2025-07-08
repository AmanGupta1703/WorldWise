import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Input, Button } from "./";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "one@gmail.com",
    password: "12345678",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const handleLogin = (ev) => {
    ev.preventDefault();

    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    dispatch({ type: "auth/login", payload: formData });
    navigate("/app");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form
      className="bg-zinc-700 w-full self-start py-5 px-7 text-white space-y-6 rounded-[8px]"
      onSubmit={handleLogin}>
      <div className="space-y-4">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          className="disabled:cursor-not-allowed opacity-45"
          value={formData.email}
          onChange={handleChange}
          errorMessage={formErrors.email}
          disabled
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="example"
          className="disabled:cursor-not-allowed opacity-45"
          value={formData.password}
          onChange={handleChange}
          errorMessage={formErrors.password}
          disabled
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
