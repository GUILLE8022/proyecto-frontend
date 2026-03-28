import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import CrearProducto from "./pages/CrearProducto";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/crear" element={<CrearProducto />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;