import FormDefault from "../components/Form";
import Navbar from "../components/NavBar";

function Login() {
  return (
    <div>
      <Navbar />
      <FormDefault route="/api/token/" method="login" />;
      <h3>To register please contact your admin</h3>
    </div>
  );
}

export default Login;
