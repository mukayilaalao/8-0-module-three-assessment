import { Link } from "react-router-dom";
import lion from "../assets/lion.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={lion} alt="app logo" />
      </Link>
      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
}

export default NavBar;
