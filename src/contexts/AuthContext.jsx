import { createContext, useContext, useReducer } from "react";

const initialState = {
  status: false,
  userData: null,
};

const AuthContext = createContext();

const AuthProvider = AuthContext.Provider;

const authReducer = (state, action) => {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        status: true,
        userData: { ...action.payload, avatarUrl: "/assets/avatar.png", firstName: "Jack" },
      };
    case "auth/logout":
      return { ...state, status: false, userData: null };
    default:
      throw Error("Unknown action type in authReducer");
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthProvider value={{ ...state, dispatch }}>{children}</AuthProvider>;
};

export { AuthContextProvider };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
