import React from "react";
import Form from "../components/Form";
import Navbar from "../components/NavBar";

function Login() {
  return  <div>
      <Navbar />    
      <Form route="/api/token/" method="login" />;
    
    </div>
}

export default Login;
