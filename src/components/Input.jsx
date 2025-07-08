import { useId } from "react";

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  errorMessage,
  ...props
}) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-base text-white font-bold" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        name={name}
        className={`text-base text-black bg-zinc-300 outline-none py-2 px-3 rounded-[5px] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 focus:bg-white ${
          errorMessage ? "border-2 border-red-500" : ""
        } ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />

      {errorMessage && <p className="text-sm text-red-500 font-medium">{errorMessage}</p>}
    </div>
  );
};

export default Input;
