import { Link } from "react-router-dom";
import classNames from "classnames";

// type = "nav" | "hero"
const LoginLink = ({ type = "nav", children }) => {
  return (
    <Link
      className={classNames(
        "uppercase text-base bg-green-500 text-black inline-block rounded-lg font-medium transition-colors hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none py-2",
        { "px-4": type === "nav", "px-6": type === "hero" },
      )}
      to="/login">
      {children}
    </Link>
  );
};

export default LoginLink;
