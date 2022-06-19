import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({ children }) => { // Con tan sólo poner "children" ya se convierte en un HOC

    const { logged } = useContext(AuthContext);

    // Guardar en el localStorage la última página visitada para mostrarla después de un "logout" - "login"
    // Lo ponemos aqui por que al menos sabemos que todas las rutas privadas pasan por el PrivateRoute
    const { pathname, search } = useLocation();

    useEffect(() => { // Evitamos el ejecutar estas lineas de código si no cambia el "pathname" y el "search"
        if (logged) {
            const lastPath = pathname + search;
            localStorage.setItem('lastPath', lastPath); // No debemos hacer el "stringify" ya que ya es un string
        }
    }, [pathname, search])
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (logged)
        ? children
        : <Navigate to="/login" />
}
