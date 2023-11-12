import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  function handleCount(e) {
    setCharCount((count) => (count = e.target.value.length));
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_jiyjiqj",
        "template_k7ymlsq",
        form.current,
        "19gPlfF8HqCKrbNRq"
      )
      .then(
        (result) => {
          setIsLoading(false);
          e.target.reset();
          alert("Form submitted successfuly");
        },
        (error) => {
          setIsLoading(false);
          alert("Error in submitting form");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <p className="contact-me">Contact Me</p>
      <div className="section-contact">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            {/* <source src="/images/contact/video.webm" type="video/webm" /> */}
            <source src="/images/contact/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="form-block">
          <form ref={form} onSubmit={sendEmail}>
            <div className="f-name form-el">
              <label>Full Name</label>
              <input type="text" required name="user_name" />
            </div>
            <div className="email form-el">
              <label>Email Address</label>
              <input type="email" required name="user_email" />
            </div>
            <div className="message span-message form-el">
              <label>Message</label>
              <textarea
                name="message"
                maxLength={1000}
                onChange={handleCount}
              />
              <div className="charCount">{charCount}/1000</div>
            </div>
            <button type="submit" className="form-btn">
              {isLoading ? "Submitting" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
