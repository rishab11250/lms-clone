import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, [navigate]);

  return null;
}
