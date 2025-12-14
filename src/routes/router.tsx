import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectDetails from "../pages/ProjectDetails";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="education" element={<Education/>}/>
                <Route path="about-me" element={<AboutMe/>}/>
                <Route path="skill" element={<Skills/>}/>
                <Route path="projects" element={<Projects/>}/>
                {/* <Route path="/" element={<Projects />} /> */}
                <Route path="/projects/:id" element={<ProjectDetails />} />
            </Route>

        </Routes>
    );
};

export default AppRouter;
