import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Route>

        </Routes>
    );
};

export default AppRouter;
