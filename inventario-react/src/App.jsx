import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import CrearProducto from "./pages/CrearProducto";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>

      {/* Navbar solo si está logueado */}
      {user && <Navbar />}

      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* RUTA PROTEGIDA */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/productos"
          element={
            <PrivateRoute>
              <Productos />
            </PrivateRoute>
          }
        />

        <Route
          path="/crear"
          element={
            <PrivateRoute>
              <CrearProducto />
            </PrivateRoute>
          }
        />

        {/* REDIRECCIÓN AUTOMÁTICA */}
        <Route
          path="*"
          element={<Navigate to={user ? "/" : "/login"} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;