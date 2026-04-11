import "./about.css";

function About() {
    return (
      <section className="about" id="about">
        <div className="about_heading">
          <span className="section_tag">About me</span>
          <h2>Get to know me</h2>
        </div>
        <div className="about_grid">
          <div className="about_copy">
            <p>
              I'm a creative developer passionate about bringing ideas to life
              through code. With a keen eye for design and a deep understanding of
              modern web technologies, I craft seamless digital experiences that
              users love.
            </p>
            <p>
              Whether it's a polished frontend interface or a dependable backend
              system, I enjoy solving problems and turning ideas into useful,
              elegant products. My journey in tech is driven by curiosity,
              continuous learning, and the desire to make an impact.
            </p>
          </div>
          <div className="about_panel">
            <div className="about_stat">
              <span className="stat_value">2+</span>
              <span className="stat_label">Years building interfaces</span>
            </div>
            <div className="about_stat">
              <span className="stat_value">6</span>
              <span className="stat_label">Core technologies</span>
            </div>
            <div className="additional_info">
              <p className="pill">Based in Nigeria</p>
              <p className="pill">Student at FUTO</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;