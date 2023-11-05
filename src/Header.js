import Hero from "./Hero";

function Header() {
  return (
    <header className="header">
      <div className="section-header">
        <p className="header-right header-text">Ambika Prasad</p>
        <div className="header-left">
          <p className="about header-text">About</p>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
