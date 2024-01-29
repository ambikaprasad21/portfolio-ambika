import About from "./About";
import "./App.css";
import "./query.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Scrolltop from "./Scrolltop";
import Services from "./Services";
import Technology from "./Technology";

function App() {
  return (
    <>
      <Header />
      <About />
      <Technology />
      {/* <Services /> */}
      <Projects />
      <Contact />
      <Footer />
      <Scrolltop />
    </>
  );
}

export default App;
