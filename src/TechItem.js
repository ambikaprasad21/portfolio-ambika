function TechItem({ src, alt, children }) {
  return (
    <div className="tech-grid-item neon-border">
      <img
        src={`/images/technologies/${src}.png`}
        alt={`${alt === "ex" ? "Express" : alt}`}
      />
      <p className="tech-name">{src === "ex" ? "Express" : src}</p>
    </div>
  );
}

export default TechItem;
