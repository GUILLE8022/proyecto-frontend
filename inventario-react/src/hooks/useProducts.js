import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/api";
import { ProductContext } from "../context/ProductContext";

export function useProducts() {
  const [productosAPI, setProductosAPI] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productosCreados } = useContext(ProductContext);

  useEffect(() => {
    getProducts().then((data) => {
      setProductosAPI(data);
      setLoading(false);
    });
  }, []);

  // Combinar productos de API y creados
  const productos = [...productosAPI, ...productosCreados];

  return { productos, loading };
}