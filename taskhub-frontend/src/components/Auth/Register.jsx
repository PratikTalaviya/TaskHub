import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      toast.success("Registration Successful!!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      toast.error(`Registration Failed!! ${error.response.data.error}`);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Register
        </label>
        <input
          className="input"
          type="text"
          name="txt"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
