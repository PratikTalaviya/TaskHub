import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <h2>Welcome To TaskHub</h2>
      <Link to={"/login"}>Login</Link>
    </>
  );
}
