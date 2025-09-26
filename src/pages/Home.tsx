import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactSection/>
            <Footer/>

        </div>
    );
};

export default Home;