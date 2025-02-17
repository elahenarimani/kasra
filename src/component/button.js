function Button({onClickHandler, className, disabled, children}) {
  return (
    <button
      onClick={() => onClickHandler()}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
