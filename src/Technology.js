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
        <div className="tech-grid">
          {technologiesImages.map((item) => (
            <TechItem src={item.src} alt={item.src} />
          ))}
          {/* <div>
            <img src="/images/technologies/html.png" alt="html" />
            <p>HTML</p>
          </div>
          <div>
            <img src="/images/technologies/css.png" alt="css" />
            <p>CSS</p>
          </div>
          <div>
            <img src="/images/technologies/javascript.png" alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="/images/technologies/nodejs.png" alt="nodejs" />
            <p>Node.js</p>
          </div>
          <div>
            <img src="/images/technologies/mongoDb.png" alt="mongoDb" />
            <p>MongoDB</p>
          </div>
          <div>
            <img src="/images/technologies/mySql.png" alt="mySql" />
            <p>MySQL</p>
          </div>
          <div>
            <img src="/images/technologies/react.png" alt="react" />
            <p>React</p>
          </div>
          <div>
            <img src="/images/technologies/tailwind.png" alt="tailwind" />
            <p>Tailwind Css</p>
          </div>
          <div>
            <img src="/images/technologies/c++.png" alt="c++" />
            <p>C++</p>
          </div>
          <div>
            <img src="/images/technologies/python.png" alt="python" />
            <p>Python</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Technology;
