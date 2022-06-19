import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => { // Con tan sólo poner "children" ya se convierte en un HOC

    const { logged } = useContext(AuthContext);

    return (logged)
    ? <Navigate to="/marvel" />
    : children
}
