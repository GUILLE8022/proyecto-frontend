const FormInput = ({ label, type = "text", register, name, errors, validation = {}, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        id={name}
        type={type}
        {...(register ? register(name, validation) : {})}
        className={`form-input ${errors && errors[name] ? "error" : ""}`}
        {...props}
      />
      {errors && errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
};

export default FormInput;
