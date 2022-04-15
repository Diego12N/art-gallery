import {
	faFacebookF,
	faGithub,
	faInstagram,
	faLinkedinIn,
	faTwitter,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "../style/footer.css";

export const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-content">
					<ul className="footer-section">
						<li className="footer-list__container list__container">
							<div className="footer-list list-logotipe">
								<Link to="/" className="footer-logotipe">
									<img
										src="https://i.ibb.co/LpC9C1t/Mar-logotipe.jpg"
										className="footer-logotipe__img"
										alt="Logotipo"
									></img>
								</Link>
								<div className="footer-logotipe__description">
									<h2 className="footer-title">Mar Ponssa Art</h2>
									<p className="footer-subTitle">
										Abstract Artist / Sustain Art
									</p>
								</div>
							</div>
							<div className="footer-list">
								{/* 								<p className="footer-summary">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Libero quos corrupti animi reprehenderit veniam nesciunt
									quisquam recusandae cumque necessitatibus mollitia?
								</p> */}
							</div>
						</li>
						<li className="footer-list__container">
							<div className="footer-contact">
								<p className="footer-contact__title">Contacto</p>
								<ul className="footer-contact__details">
									<li className="contact">
										<FontAwesomeIcon
											icon={faWhatsapp}
											className="contact-icon"
										/>
										<p className="contact-content">{"(+54) 3516871793"}</p>
									</li>
									<li className="contact">
										<FontAwesomeIcon
											icon={faEnvelope}
											className="contact-icon"
										/>
										<p className="contact-content">martina.ponssa@gmail.com</p>
									</li>
									<li className="contact">
										<FontAwesomeIcon
											icon={faLocationDot}
											className="contact-icon"
										/>
										<p className="contact-content">From Córdoba, Argentina.</p>
									</li>
								</ul>
							</div>
						</li>
						<li className="footer-list__container">
							<div className="footer-rs">
								<p className="footer-rs__title">Redes sociales</p>
								<div className="footer-rs__icons">
									<a href="https://www.facebook.com/Ocenodemar" target="_black">
										<FontAwesomeIcon
											icon={faFacebookF}
											className="footer-icon"
										/>
									</a>
									<a
										href="https://www.instagram.com/mar.ponssa/"
										target="_black"
									>
										<FontAwesomeIcon
											icon={faInstagram}
											className="footer-icon"
										/>
									</a>
									<a href="https://twitter.com/MarPonssa" target="_black">
										<FontAwesomeIcon icon={faTwitter} className="footer-icon" />
									</a>
								</div>
							</div>
						</li>
					</ul>
					<div className="footer-section footer-credit">
						<p>
							by Diego Emmanuel Naranjo.<b> Frontend Developer.</b>
						</p>
						<div>
							<a
								href="https://www.linkedin.com/in/diego-emmanuel-naranjo-7ba10513a/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									className="footer-credit__icon icon-linkedin"
								/>
							</a>
							<a href="https://github.com/Diego12N/" target="_blank">
								<FontAwesomeIcon
									icon={faGithub}
									className="footer-credit__icon"
								/>
							</a>
						</div>
					</div>
				</div>
				<div></div>
			</footer>
		</>
	);
};
