import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [productosCreados, setProductosCreados] = useState([]);

  // Cargar productos desde localStorage al iniciar
  useEffect(() => {
    const productosGuardados = localStorage.getItem("productosCreados");
    if (productosGuardados) {
      setProductosCreados(JSON.parse(productosGuardados));
    }
  }, []);

  // Guardar productos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("productosCreados", JSON.stringify(productosCreados));
  }, [productosCreados]);

  const agregarProducto = (producto) => {
    const nuevoProducto = {
      id: Date.now(), // ID único basado en timestamp
      title: producto.nombre || producto.title || "Producto Nuevo",
      price: Number(producto.precio ?? producto.price ?? 0),
      description: producto.descripcion || producto.description || "Producto creado por el usuario",
      image:
        producto.image ||
        "https://via.placeholder.com/300x200.png?text=Producto+creado",
      // para compatibilidad con tu filtrado y ProductCard
      nombre: producto.nombre || producto.title || "Producto Nuevo",
      precio: Number(producto.precio ?? producto.price ?? 0),
    };

    setProductosCreados([...productosCreados, nuevoProducto]);
  };

  return (
    <ProductContext.Provider value={{
      carrito,
      setCarrito,
      productosCreados,
      agregarProducto
    }}>
      {children}
    </ProductContext.Provider>
  );
}