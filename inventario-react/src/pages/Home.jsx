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
      <div style={{ marginTop: '2rem' }}>
        <Link to="/productos" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          marginRight: '1rem',
          transition: 'background-color 0.3s ease'
        }}>
          Ver Productos
        </Link>
        <Link to="/crear" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#27ae60',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}>
          Crear Producto
        </Link>
      </div>
    </div>
  );
};

export default Home;
