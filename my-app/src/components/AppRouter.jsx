import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router";

export const AppRouter = () => {
    const auth = true;

    return (
        auth ? 
        <Routes>
            {privateRoutes.map(route => 
                <Route path={route.path} key={route.path} element={<route.component/>}></Route>
                )}
                <Route path="/*" element={<Navigate to={RouteNames.EVENT} replace/>}/> 
                </Routes> : <Routes>
            {publicRoutes.map(route => 
                <Route path={route.path} key={route.path} element={<route.component/>}></Route>
                )}
                <Route path="/*" element={<Navigate to={RouteNames.LOGIN} replace/>}/> 
                </Routes>
    )
}
