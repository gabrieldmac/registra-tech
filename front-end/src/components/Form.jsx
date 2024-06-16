import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button';

function FormDefault({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } 
  };

  return (
    <>

    <Form onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit">{name}</Button>
    </Form>
 

      
    </>
  );
}

export default FormDefault;
