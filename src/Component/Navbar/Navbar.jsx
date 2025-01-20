import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar-logo">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navbar-right">
          <nav className="nav-items">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="./about"> About</Link>
              </li>
              <li>
                <Link to="./menu"> Menu</Link>
              </li>
              <li>
                <Link to="./cart"> Cart</Link>
              </li>
              <li>
                <Link to="./checkout"> Checkout</Link>
              </li>
              <li>
                <Link to="./login"> Login/signup</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
