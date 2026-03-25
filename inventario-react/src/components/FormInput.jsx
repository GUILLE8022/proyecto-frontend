const FormInput = ({ label, type = "text", register, name, errors, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className={`form-input ${errors[name] ? "error" : ""}`}
        {...props}
      />
      {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
};

export default FormInput;
