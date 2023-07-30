const TextButton = ({ type = "button", onClick, children, ...rest }) => {
  return (
    <button
      className="inline-flex items-center font-jost text-2xl"
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TextButton;
