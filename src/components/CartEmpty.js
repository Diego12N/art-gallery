import {faArrowLeft, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import "../style/cartEmpty.css";

const CartEmpty = () => {
	return (
		<div className="cart-empty__container">
			<div>
				<div className="cart-icon__container">
					<FontAwesomeIcon icon={faCartShopping} className="cart-empty__icon" />
				</div>
				<h1 className="cart-empty__title">No hay productos en el carrito</h1>
				<Link to="/" className="cart-empty__link">
					<div className="cart-empty__button">
						<FontAwesomeIcon icon={faArrowLeft} />
						<p>Volver al Inicio</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CartEmpty;
