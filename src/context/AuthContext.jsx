import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  const [users, setUsers] = useState(() => {
    const raw = localStorage.getItem("users");
    return raw ? JSON.parse(raw) : [];
  });

  // Registrar un nuevo usuario (devuelve objeto con success/message)
  const registerUser = (newUser) => {
    const exists = users.find((u) => u.correo === newUser.correo);
    if (exists) {
      return { success: false, message: "El correo ya está registrado" };
    }

    const toStore = { nombre: newUser.nombre, correo: newUser.correo, password: newUser.password };
    const updated = [...users, toStore];
    setUsers(updated);
    // Autologin (almacenamos sin contraseña en user)
    const safeUser = { nombre: newUser.nombre, correo: newUser.correo };
    setUser(safeUser);
    return { success: true };
  };

  // Login verifica credenciales contra usuarios registrados
  const login = ({ correo, password }) => {
    const found = users.find((u) => u.correo === correo && u.password === password);
    if (!found) {
      return { success: false, message: "Credenciales inválidas. Regístrate primero o verifica tu correo/contraseña." };
    }

    const safeUser = { nombre: found.nombre, correo: found.correo };
    setUser(safeUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <AuthContext.Provider value={{ user, login, logout, registerUser, users }}>
      {children}
    </AuthContext.Provider>
  );
}