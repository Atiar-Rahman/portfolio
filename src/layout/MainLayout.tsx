import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="container mx-auto">
            <Navbar/>
            <motion.main
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.985, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <Outlet/>
            </motion.main>
        </div>
    );
};

export default MainLayout;
