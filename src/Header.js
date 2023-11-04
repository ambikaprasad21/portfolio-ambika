import Hero from "./Hero";

function Header() {
  return (
    <header className="header">
      <div className="section-header">
        <p className="header-right header-text">Ambika Prasad</p>
        <div className="header-left">
          <p className="about header-text">About</p>
          <p className="resume header-text">Resume</p>
          <p className="resume header-text">Services</p>
          <p className="resume header-text">Portfolio</p>

          <p className="contact header-text">Contact</p>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
