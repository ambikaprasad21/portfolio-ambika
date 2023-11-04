function TechItem({ src, alt, children }) {
  return (
    <div className="tech-grid-item neon-border">
      <img src={`/images/technologies/${src}.png`} alt={`${alt}`} />
      <p className="tech-name">{src}</p>
    </div>
  );
}

export default TechItem;
