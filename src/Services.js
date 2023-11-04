import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faGears,
  faPager,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPenToSquare, faGears, faPager);

function Services() {
  return (
    <div className="services-bg-color">
      <div className="center">
        <div className="section-services">
          <div className="about-text">
            <p className="discover">What I Do</p>
            <div className="section-heading">
              <p className="heading-primary">My Services</p>
            </div>
          </div>
          <div className="services-grid">
            <div className="services-grid-item">
              <FontAwesomeIcon icon={faPenToSquare} className="icon-medium" />
              <p className="service-name">Creative Design</p>
              <p className="service-message">
                Elevating Brands through Creative Design – Crafting Experiences
                Beyond Imagination.
              </p>
            </div>
            <div className="services-grid-item">
              <FontAwesomeIcon icon={faGears} className="icon-medium" />
              <p className="service-name">Functional</p>
              <p className="service-message">
                We're committed to creating websites that not only look stunning
                but also deliver real results
              </p>
            </div>
            <div className="services-grid-item">
              <FontAwesomeIcon icon={faPager} className="icon-medium" />
              <p className="service-name"> User Interface</p>
              <p className="service-message">
                Our passion lies in crafting exceptional user experiences
                through thoughtful and visually appealing user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
