import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheck);

function Projects() {
  return (
    <div className="center">
      <div className="section-projects">
        <div className="about-text">
          <p className="discover">Portfolio</p>
          <div className="section-heading">
            <p className="heading-primary">Web Development</p>
          </div>
        </div>
        <div className="col-2">
          <div className="col-1-of-2">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                  <img
                    src="/images/projects/popcorn-2.png"
                    alt="popcorn website"
                  />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card-back">
                  <div className="site-brand-name">🍿usePopcorn</div>
                  <div className="site-about">
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>An all-in-one entertainment management application.</p>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        personalized movie list for an enhanced viewing
                        experience.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                  <img
                    src="/images/projects/omnifood-2.png"
                    alt="popcorn website"
                  />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card-back">
                  <div className="site-brand-name">
                    <div className="omnifood-logo">
                      <img
                        src="/images/projects/omnifood-logo.png"
                        alt="omnifood logo"
                      />
                    </div>
                  </div>
                  <div className="site-about">
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        Discover a convenient and affordable meal subscription
                        website.
                      </p>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        diverse range of healthy and customizable meal options
                        to support your well-being.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                  <img
                    src="/images/projects/worldwise.png"
                    alt="popcorn website"
                  />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card-back">
                  <div className="site-brand-name">
                    <div className="worldwise-logo">
                      <img
                        src="/images/projects/worldwise-logo.png"
                        alt="worldwise logo"
                      />
                    </div>
                  </div>
                  <div className="site-about">
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        Explore a personalized travel journal website that lets
                        you capture and save your memories of visited places
                        with ease.
                      </p>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        Use an interactive map to pin your favorite locations,
                        and revisit your cherished adventures at your
                        convenience
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4">
                  <img
                    src="/images/projects/natours-1.png"
                    alt="popcorn website"
                  />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-4">
                <div className="card-back">
                  <div className="site-brand-name">
                    <div className="natours-logo">
                      <img
                        src="/images/projects/natours-logo.png"
                        alt="worldwise logo"
                      />
                    </div>
                  </div>
                  <div className="site-about">
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>An all-in-one entertainment management application.</p>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        personalized movie list for an enhanced viewing
                        experience.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-2 card-center">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5">
                  <img
                    src="/images/projects/fast_pizza-1.png"
                    alt="popcorn website"
                  />
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-5">
                <div className="card-back">
                  <div className="site-brand-name">🍕 Fast React Pizza Co.</div>
                  <div className="site-about">
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        Indulge in a delightful pizza ordering experience with
                        our website.
                      </p>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCheck} className="icon-small" />
                      <p>
                        Choose from a diverse menu, build your own customized
                        cart, and seamlessly place your order for a delicious,
                        tailored pizza feast.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
