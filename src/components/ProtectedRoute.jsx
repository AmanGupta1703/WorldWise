import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ authentication = true, children }) => {
  const navigate = useNavigate();

  const { status: authStatus } = useAuth();

  useEffect(() => {
    if (authentication && authStatus !== authentication) navigate("/login");
  }, [authStatus, authentication, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
