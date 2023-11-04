// import myPhoto from "/images/ambika.jpg";

function About() {
  return (
    <div className="center">
      <div className="section-about">
        <div className="pf-img">
          <img src="/images/ambika.jpg" alt="Ambika's" className="about-img" />
        </div>
        <div className="about-text">
          <p className="discover">Discover</p>
          <div className="section-heading">
            <p className="heading-primary">About me</p>
          </div>

          <p className="intro-para">
            My name is Ambika Prasad, a passionate web developer with a drive
            for turning ideas into digital experiences. With a deep-rooted love
            for all things web, I thrive on crafting elegant and functional
            websites that not only look stunning but also deliver seamless user
            experiences. Let's collaborate to bring your web projects to life
            and make the internet a more beautiful and user-friendly place!
          </p>
          <div className="box-info">
            <div className="box-left">
              <p>
                Name: <span>Ambika Prasad</span>
              </p>
              <p>
                Phone: <span>+91 7905194692</span>
              </p>
              <p>
                Gmail: <span>ambikaprasad2025@gmail.com</span>
              </p>
            </div>
            <div className="box-right box-left">
              <p>
                Age: <span>21</span>
              </p>
              <p>
                Address: <span>Prayagraj, INDIA</span>
              </p>
              <p>
                Freelance: <span>available</span>
              </p>
            </div>
          </div>
          <div className="flex-end">
            <button className="download-btn">DOWNLOAD RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
