import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
    navigate("/productos");
  };

  return (
    <div className="crear-producto">
      <h1>Login</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <input
            placeholder="Nombre"
            className={`form-input ${errors.nombre ? "error" : ""}`}
            {...register("nombre", { required: "Nombre obligatorio" })}
          />
          {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
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

        <button className="submit-btn">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;