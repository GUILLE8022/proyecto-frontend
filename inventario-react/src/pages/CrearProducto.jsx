import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import FormInput from "../components/FormInput";

function CrearProducto() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { agregarProducto } = useContext(ProductContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Validar precio numérico
    if (isNaN(data.precio) || data.precio <= 0) {
      alert("El precio debe ser un número positivo");
      return;
    }

    // Agregar producto al contexto
    agregarProducto(data);

    // Limpiar formulario
    reset();

    // Redirigir a /productos
    navigate("/productos");
  };

  return (
    <div className="crear-producto">
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormInput
          label="Nombre"
          name="nombre"
          register={register}
          errors={errors}
          validation={{ required: "El nombre es obligatorio" }}
        />
        <FormInput
          label="Precio"
          name="precio"
          type="number"
          step="0.01"
          register={register}
          errors={errors}
          validation={{ required: "El precio es obligatorio" }}
        />
        <button type="submit" className="submit-btn">Guardar</button>
      </form>
    </div>
  );
}

export default CrearProducto;