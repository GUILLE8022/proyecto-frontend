import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Inventario App
        </Link>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/productos" className="navbar-link" onClick={() => setIsOpen(false)}>
            Productos
          </Link>
          <Link to="/crear" className="navbar-link" onClick={() => setIsOpen(false)}>
            Crear Producto
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
