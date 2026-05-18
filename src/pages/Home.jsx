import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>🏪 Sistema de Inventario</h1>
      <p>
        Bienvenido a tu aplicación de gestión de inventario. Administra tus productos
        de manera eficiente con nuestra interfaz intuitiva.
      </p>
      <p>
        Explora productos de nuestra API integrada o crea tus propios productos personalizados.
      </p>
      <div className="home-actions">
        <Link to="/productos" className="btn btn-primary">Ver Productos</Link>
        <Link to="/crear" className="btn btn-success">Crear Producto</Link>
      </div>
    </div>
  );
};

export default Home;
