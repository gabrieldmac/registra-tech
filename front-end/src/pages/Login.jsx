import FormDefault from "../components/Form";
import Navbar from "../components/NavBar";

function Login() {
  return (
    <div>
      <Navbar />
      <FormDefault route="/api/token/" method="login" />;
      
    </div>
  );
}

export default Login;
