// buttonType = "primary" | "secondary" "tertiary"
const Button = ({
  buttonType = "primary",
  type = "button",
  className = "",
  children,
  ...props
}) => {
  const buttonStyles =
    buttonType === "primary"
      ? "font-[600] bg-green-400 text-zinc-900 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 hover:bg-green-500"
      : buttonType === "secondary"
      ? "font-[600] border border-white text-white focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-white hover:text-zinc-900"
      : buttonType === "tertiary"
      ? "text-xs bg-zinc-600/50 text-white font-bold tracking-tight focus:ring-2 focus:ring-offset-2 hover:bg-zinc-600/80"
      : "";

  return (
    <button
      className={`uppercase py-2 px-4 rounded-[5px] cursor-pointer focus:outline-none 
        ${buttonStyles} ${className}`}
      type={type}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
