// import TextAnimation from "./TextAnimation";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="section-hero">
      <div className="hero">
        <p className="h1">
          Hi, I'm{" "}
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Ambika Prasad", "Web Developer", "Web Designer"]}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className="h3">A creative freelancer & full stack developer</p>
      </div>
    </div>
  );
}

export default Hero;
