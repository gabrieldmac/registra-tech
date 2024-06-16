import { Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function Navbar() {
  return (
    
    
    <nav className="nav">
      <Link to="/" className="site-title">
        Registra Tech
      </Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <ProtectedRoute>
            <Link to="/logout">Logout</Link>
          </ProtectedRoute>
        </li>
        <li>
          <ProtectedRoute>
            <Link to="/notes">Notes</Link>
          </ProtectedRoute>
        </li>
      </ul>
    </nav>


  );
}

export default Navbar;
