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
  ];

  return (
    <div className="center">
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
    </div>
  );
}

export default Technology;
