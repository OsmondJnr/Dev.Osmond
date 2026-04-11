import "./hero.css";
import avatarImage from "./assets/mock_portfolio_dp.jpg";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero_content">
                <div className="my_name">
                    <h1>Okaekwu Kemdy</h1>
                    <h1 className="highlight_text">Osmond</h1>
                </div>
                <div className="occupation">
                    <h2>Software Engineer</h2>
                </div>
            </div>
            <div className="my_card">
                <div className="my_picture">
                    <div className="avatar"><img src={avatarImage} alt="OK" /></div>
                </div>
                <div className="technologies">
                    <h3>Tech Stack</h3>
                    <div className="tech_icons" aria-label="Technologies used">
                        <span className="tech_item" title="C++">
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <small>C++</small>
                        </span>
                        <span className="tech_item" title="JavaScript">
                            <ion-icon name="logo-javascript"></ion-icon>
                            <small>JS</small>
                        </span>
                        <span className="tech_item" title="React">
                            <ion-icon name="logo-react"></ion-icon>
                            <small>React</small>
                        </span>
                        <span className="tech_item" title="Node.js">
                            <ion-icon name="logo-nodejs"></ion-icon>
                            <small>Node</small>
                        </span>
                        <span className="tech_item" title="HTML5">
                            <ion-icon name="logo-html5"></ion-icon>
                            <small>HTML</small>
                        </span>
                        <span className="tech_item" title="CSS3">
                            <ion-icon name="logo-css3"></ion-icon>
                            <small>CSS</small>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Hero;