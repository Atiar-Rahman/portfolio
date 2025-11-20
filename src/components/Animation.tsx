
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Coding Slide.json";
const Animation = () => {
    return (
      <div>
        <Lottie animationData={groovyWalkAnimation} loop={true} />;
      </div>
    );
};

export default Animation;



