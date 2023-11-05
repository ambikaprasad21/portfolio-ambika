import TechItem from "./TechItem";

function Technology() {
  const technologiesImages = [
    {
      src: "html",
    },
    {
      src: "css",
    },
    {
      src: "javascript",
    },
    {
      src: "nodejs",
    },
    {
      src: "mongoDb",
    },
    {
      src: "mySql",
    },
    {
      src: "react",
    },
    {
      src: "tailwind",
    },
    {
      src: "c++",
    },
    {
      src: "python",
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
