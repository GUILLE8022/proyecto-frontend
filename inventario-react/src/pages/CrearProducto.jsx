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
    if (isNaN(precio) || precio <= 0) {
      setFeedback("El precio debe ser un número positivo");
      return;
    }

    // Agregar producto al contexto
    agregarProducto({ ...data, precio });

    // Limpiar formulario
    reset();

    // Mostrar feedback
    setFeedback("Producto agregado exitosamente");

    // Redirigir después de un breve delay para mostrar el feedback
    setTimeout(() => {
      navigate("/productos");
    }, 1500);
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
            minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" }
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
            min: { value: 0.01, message: "El precio debe ser mayor a 0" }
          }}
        />
        <button type="submit" className="submit-btn">Guardar Producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;