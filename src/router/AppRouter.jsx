import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="login" element={ <PublicRoute> <LoginPage /> </PublicRoute>} /> 
            {/* <Route path="login" element={<LoginPage />} />  */}
            
            <Route path="/*" element={ <PrivateRoute> <HeroesRoutes /> </PrivateRoute>} /> {/* Rutas Privadas */}
            
            {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
            
            {/* Podemos poner rutas aquí afuera que no importe si son públicas o privadas */}

        </Routes>
    
    </>
  )
}
