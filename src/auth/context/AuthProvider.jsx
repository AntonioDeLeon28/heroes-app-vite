//Creación del proveedor
import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

// const initialState = {
//     logged: false,
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return { //Debe de tener la forma del estado inicial
        logged: !!user,
        user: user,
    };
}

export const AuthProvider = ({ children }) => { // Con tan sólo poner "children" ya se convierte en un HOC

    const [ authState, dispatch ] = useReducer( authReducer, {}, init ); // Se puede usar también un useState

    const login = ( name = '' ) => {
        const user = {id: 'ABC', name: name}; // Es el payload 
        const action = {
            type: types.login,
            payload: user,
        }
        localStorage.setItem('user', JSON.stringify( user )); // Mandamos al localStorage la informacion de autenticación
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}> {/* Aqui va el valor que va a proveer a cada componente hijo */}
            {children}
        </AuthContext.Provider>
    )
}
