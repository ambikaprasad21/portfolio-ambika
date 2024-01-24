import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import TechItem from "./TechItem";

function Technology() {
  const technologiesImages = [
    {
      src: "HTML",
    },
    {
      src: "CSS",
    },
    {
      src: "JavaScript",
    },
    {
      src: "Nodejs",
    },
    {
      src: "mongoDB",
    },
    {
      src: "MySQL",
    },
    {
      src: "React",
    },
    {
      src: "Tailwind",
    },
    {
      src: "C++",
    },
    {
      src: "Python",
    },
    {
      src: "Express",
    },
    {
      src: "Git",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="center"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 100 }}
    >
      <div className="section-tech">
        <p className="discover">Skills</p>
        <div className="section-heading">
          <p className="heading-primary">Tools & Technologies</p>
        </div>
        <div className="tech-grid-container">
          <div className="tech-grid">
            {technologiesImages.map((item) => (
              <TechItem src={item.src} alt={item.src} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Technology;
