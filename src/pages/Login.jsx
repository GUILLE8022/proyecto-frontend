import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (data) => {
    const result = login({ correo: data.correo, password: data.password });
    if (!result.success) {
      setFeedback(result.message || "Error al iniciar sesión");
      return;
    }

    navigate("/productos");
  };

  return (
    <div className="crear-producto">
      <h1>Login</h1>
      {feedback && <div className="feedback">{feedback}</div>}

      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label className="form-label">Correo</label>
          <input
            placeholder="Correo"
            className={`form-input ${errors.correo ? "error" : ""}`}
            {...register("correo", {
              required: "Correo obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo inválido"
              }
            })}
          />
          {errors.correo && <span className="error-message">{errors.correo.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className={`form-input ${errors.password ? "error" : ""}`}
            {...register("password", { required: "Contraseña obligatoria" })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <button className="submit-btn">Ingresar</button>
      </form>
      <p className="auth-footer">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;