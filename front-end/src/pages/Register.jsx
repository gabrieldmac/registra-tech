import FormDefault from "../components/Form";
import Navbar from "../components/NavBar";

function Register() {
  return (
    <>
      <div>
        <FormDefault route="/api/user/register/" method="register" />
        
      </div>
      <Navbar />
      
    </>
  );
}

export default Register;
