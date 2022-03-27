import {faEdit, faUser} from "@fortawesome/free-regular-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../style/contactPage.css";

export const ContactPage = () => {
	return (
		<>
			<div className="form-container">
				<form className="form">
					<div className="form-section field">
						<label htmlFor="name" className="form-section__title">
							<FontAwesomeIcon icon={faUser} className="form-icon" />
							Nombre y Apellido
						</label>
						<input
							id="fullName"
							className="form-input"
							name="name"
							type="text"
							placeholder="Nombre y Apellido"
						></input>
					</div>
					<div className="form-section field">
						<label htmlFor="email" className="form-section__title">
							<FontAwesomeIcon icon={faEnvelope} className="form-icon" /> E-Mail
						</label>
						<input
							id="email"
							className="form-input"
							name="email"
							type="email"
							placeholder="E-mail"
						></input>
					</div>
					<div className="form-section field">
						<label htmlFor="message" className="form-section__title">
							<FontAwesomeIcon icon={faEdit} className="form-icon" /> Mensaje
						</label>
						<textarea
							className="form-textarea form-input"
							name="message"
						></textarea>
					</div>
					<div className="form-section">
						<button className="form-button" onClick={(e) => e.preventDefault()}>
							Enviar
						</button>
					</div>
				</form>
				<div className="form-image">
					<img
						src="https://i.ibb.co/2hmJTMP/header-margin2.jpg"
						className="form-image__content"
					></img>
				</div>
			</div>
		</>
	);
};
