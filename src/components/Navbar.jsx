import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/assets/logo.jpg" className="logo-img" />
        <div className="logo-text">FlexiStudy</div>
      </div>

      <div className="nav-links">
        <Link to="/landing">Home</Link>
        <Link to="/aboutUs" className="underline">About us</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/">Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;