import {Routes, Route} from "react-router-dom";
import {Main} from "./pages/main";
import {Login} from "./pages/login";
import {NotFound} from "./pages/not-found";
import {Register} from "./pages/register";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
