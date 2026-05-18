import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import FormInput from "../components/FormInput";

function CrearProducto() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { agregarProducto } = useContext(ProductContext);
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (data) => {
    const precio = parseFloat(data.precio);
    if (isNaN(precio) || precio < 0) {
      setFeedback("El precio debe ser un número válido y no puede ser negativo");
      return;
    }

    // Trim nombre y descripción
    const nombre = data.nombre.trim();
    const descripcion = data.descripcion.trim();

    if (!nombre) {
      setFeedback("El nombre no puede estar vacío o contener solo espacios");
      return;
    }

    // Agregar producto al contexto
    agregarProducto({ ...data, precio, nombre, descripcion });

    // Limpiar formulario
    reset();

    // Mostrar feedback
    setFeedback("Producto agregado exitosamente");

    // Redirigir después de un breve delay para mostrar el feedback
    setTimeout(() => {
      navigate("/productos");
    }, 1200);
  };

  return (
    <div className="crear-producto">
      <h1>Crear Producto</h1>
      {feedback && <div className="feedback success">{feedback}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormInput
          label="Nombre"
          name="nombre"
          register={register}
          errors={errors}
          validation={{
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" },
            validate: (v) => v.trim().length > 0 || "El nombre no puede ser solo espacios"
          }}
        />
        <FormInput
          label="Precio"
          name="precio"
          type="number"
          step="0.01"
          min="0.01"
          register={register}
          errors={errors}
          validation={{
            required: "El precio es obligatorio",
            min: { value: 0, message: "El precio no puede ser negativo" }
          }}
        />
        <FormInput
          label="Descripción"
          name="descripcion"
          register={register}
          errors={errors}
          validation={{
            required: "La descripción es obligatoria",
            minLength: { value: 10, message: "La descripción debe tener al menos 10 caracteres" }
          }}
        />
        <button type="submit" className="submit-btn">Guardar Producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;