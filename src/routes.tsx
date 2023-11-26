import {Routes, Route} from "react-router-dom";
import {Main} from "./pages/main";
import {Login} from "./pages/login";
import {NotFound} from "./pages/not-found";
import {Register} from "./pages/register";
import {Favorites} from "./pages/favorites";
import {Category} from "./pages/category";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <ProtectedRoute>
                    <Main/>
                </ProtectedRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/favorites' element={
                <ProtectedRoute>
                    <Favorites/>
                </ProtectedRoute>
            }/>
            <Route path='/category/:id' element={
                <ProtectedRoute>
                    <Category/>
                </ProtectedRoute>
            }/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
