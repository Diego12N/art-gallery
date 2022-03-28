import {faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import "../style/modalConfirm.css";

export const ModalConfirm = ({orderDetails, show}) => {
	const [showModal, setShowModal] = useState(show);
	const {comprador, id} = orderDetails;

	return (
		<>
			{showModal && (
				<div className="modal">
					<div className="modal__container">
						<div className="modal-icon">
							<FontAwesomeIcon
								icon={faClipboardCheck}
								className="modal-icon-check"
							/>
						</div>
						<div className="modal-details">
							<div className="modal-buyer modal-section">
								<p>{comprador.name},</p>
								<p>Tu pedido fue enviado a nuestra base.</p>
							</div>
							<div className="">
								<b>¡GRACIAS POR TU COMPRA!</b>
							</div>
						</div>
						<div className="modal-order modal-section">
							<strong>Orden Nro.</strong>
							<p className="order-number">{id}</p>
						</div>
						<button
							className="form-button-close"
							onClick={() => setShowModal(false)}
						>
							CERRAR
						</button>
					</div>
				</div>
			)}
		</>
	);
};
