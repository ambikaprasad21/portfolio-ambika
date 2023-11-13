function About() {
  const handleDownload = () => {
    // Replace 'your-pdf-file-url.pdf' with the actual URL of your PDF file.
    const pdfUrl = "./resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute to specify the filename
    link.download = "Ambika-Presad-resume.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div className="center">
      <div className="section-about">
        <div className="about-heading">
          <p className="discover">Discover</p>
          <div className="section-heading">
            <p className="heading-primary">About me</p>
          </div>
        </div>
        <div className="about-content">
          <div className="about-text about-item">
            <p className="intro-para">
              My name is Ambika Prasad, a passionate web developer with a drive
              for turning ideas into digital experiences. With a deep-rooted
              love for all things web, I thrive on crafting elegant and
              functional websites that not only look stunning but also deliver
              seamless user experiences. Let's collaborate to bring your web
              projects to life and make the internet a more beautiful and
              user-friendly place!
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
              {/* <a
                href="https://drive.google.com/file/d/1vFo-DCT9150JNkGx6gkDP8Wn-oLwQS3a/view?usp=sharing"
                download
              > */}
              <button className="download-btn" onClick={handleDownload}>
                DOWNLOAD RESUME
              </button>
              {/* </a> */}
            </div>
          </div>
          <div className="pf-img about-item">
            <img
              src="/images/ambika.jpg"
              alt="Ambika's"
              // className="about-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
