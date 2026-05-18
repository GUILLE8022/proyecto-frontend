import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (data) => {
    const payload = { nombre: data.nombre.trim(), correo: data.correo, password: data.password };
    const res = registerUser(payload);
    if (!res.success) {
      setFeedback(res.message || 'No se pudo registrar');
      return;
    }

    setFeedback("Registro exitoso. Redirigiendo...");
    setTimeout(() => navigate('/productos'), 900);
  };

  const password = watch('password', '');

  return (
    <div className="crear-producto">
      <h1>Registro</h1>
      {feedback && <div className="feedback success">{feedback}</div>}

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            className={`form-input ${errors.nombre ? 'error' : ''}`}
            {...register('nombre', { required: 'Nombre obligatorio', minLength: { value: 2, message: 'Mínimo 2 caracteres' }, validate: v => v.trim().length > 0 || 'El nombre no puede ser solo espacios' })}
          />
          {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Correo</label>
          <input
            className={`form-input ${errors.correo ? 'error' : ''}`}
            {...register('correo', { required: 'Correo obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } })}
          />
          {errors.correo && <span className="error-message">{errors.correo.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className={`form-input ${errors.password ? 'error' : ''}`}
            {...register('password', { required: 'Contraseña obligatoria', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
            {...register('confirmPassword', { required: 'Confirma tu contraseña', validate: v => v === password || 'Las contraseñas no coinciden' })}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
        </div>

        <button className="submit-btn">Crear cuenta</button>
      </form>

      <p className="auth-footer">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
}

export default Register;
