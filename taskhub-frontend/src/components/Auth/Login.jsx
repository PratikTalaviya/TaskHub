import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://task-hub-psi.vercel.app/api/auth/login", { email, password });
      console.log(response.data);
      toast.success("Login Successful!!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error.response.data);
      toast.error(`Login Failed!! ${error.response.data.error}`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="chk" aria-hidden="true">
        Log in
      </label>
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input"
        type="password"
        name="pswd"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Log in</button>
      <button>Log in with Google</button>
    </form>
  );
}

export default Login;
