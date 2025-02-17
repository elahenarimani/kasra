import "./button.scss"
function Button({onClickHandler, className, disabled, children}) {
  return (
  <div className="button-wrapper">
      <button
      onClick={() => onClickHandler()}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
  );
}
export default Button;
