import "./input.scss";
function Input({ valueState, inputHandler, className, placeholder, type }) {
  return (
    <div className="input-wrapper">
      <input
        value={valueState}
        onChange={(e) => inputHandler(e.target.value)}
        className={className}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
export default Input;
