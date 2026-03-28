import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

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

          {!user ? (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          ) : (
            <div style={{ color: "white" }}>
              Hola, {user.nombre}
              <button onClick={logout} style={{ marginLeft: "10px" }}>
                Salir
              </button>
            </div>
          )}
        </div>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;