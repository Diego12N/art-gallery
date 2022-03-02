import {useContext} from "react";
import "../style/header.css";
import {CartContext} from "./CartContext";

const CartWidget = () => {
	const test = useContext(CartContext);

	const CartQty = () => {
		return (
			<>
				{test.calcItemsQty() > 0 && (
					<div className="navbar-cart__amount">
						<p>{test.calcItemsQty()}</p>
					</div>
				)}
			</>
		);
	};

	return (
		<div className="navbar-cart">
			<i className="fas fa-shopping-cart"></i>
			<CartQty></CartQty>
		</div>
	);
};

export default CartWidget;
