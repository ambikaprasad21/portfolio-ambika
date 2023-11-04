import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

library.add(fab);

function Footer() {
  return (
    <div className="section-footer">
      <div className="footer">
        <div className="name">
          <p>Ambika Prasad</p>
          <p className="mission">
            Elevating Web Realities through Code and Creativity.
          </p>
        </div>
        <div className="social-media">
          <p>Social media handles</p>
          <div className="media-icon">
            <div className="social">
              <p>Linkdein</p>
              <a
                href="https://www.linkedin.com/in/ambikaprasad01"
                title="linkdein"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  className="sc-icon"
                />
              </a>
            </div>
            <p className="logo-divider">|</p>
            <div className="social">
              <p>Twitter</p>
              <a
                href="https://twitter.com/Ambika_mnnit21"
                title="twitter"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-square-twitter"
                  className="sc-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-end">made by 💖 ambika prasad</p>
    </div>
  );
}

export default Footer;
