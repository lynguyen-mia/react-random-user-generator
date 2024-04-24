import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">
          Random User Generator
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
