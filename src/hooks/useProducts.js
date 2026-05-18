import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/api";
import { ProductContext } from "../context/ProductContext";

export function useProducts() {
  const [productosAPI, setProductosAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productosCreados } = useContext(ProductContext);

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts();
        if (mounted) setProductosAPI(data || []);
      } catch (err) {
        console.error("Error cargando productos:", err);
        if (mounted) setError("No se pudieron cargar productos. Intenta de nuevo más tarde.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, [productosCreados]);

  // Combinar productos de API y creados
  const productos = [...(productosAPI || []), ...(productosCreados || [])];

  return { productos, loading, error };
}