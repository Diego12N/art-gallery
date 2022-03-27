import {useContext} from "react";
import "../style/header.css";
import {CartContext} from "./CartContext";

const CartWidget = () => {
	const test = useContext(CartContext);

	let cartItemQuantitie = test.calcItemsQty();

	return (
		<div className="navbar-cart">
			<i className="fas fa-shopping-cart"></i>
			{cartItemQuantitie > 0 && (
				<div className="navbar-cart__amount">
					<p>{cartItemQuantitie}</p>
				</div>
			)}
		</div>
	);
};

export default CartWidget;
