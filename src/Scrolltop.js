import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowUp);

const Scrolltop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scroll-to-top"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className="up-arrow" />
    </div>
  );
};

export default Scrolltop;
