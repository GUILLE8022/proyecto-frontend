import { useState, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Productos() {
  const { productos, loading } = useProducts();
  const [busqueda, setBusqueda] = useState("");

  // Filtrar productos en tiempo real usando useMemo para optimización
  const productosFiltrados = useMemo(() => {
    if (!busqueda) return productos;
    return productos.filter((producto) =>
      producto.title?.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.nombre?.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [productos, busqueda]);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="productos">
      <h1>Productos</h1>

      {/* Input de búsqueda */}
      <div className="buscador-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="buscador-input"
        />
      </div>

      {/* Mensaje si no hay resultados */}
      {productosFiltrados.length === 0 && busqueda && (
        <p className="no-resultados">No se encontraron productos</p>
      )}

      <div className="productos-grid">
        {productosFiltrados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default Productos;