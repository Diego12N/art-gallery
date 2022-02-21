import "../style/header.css";
import {useContext} from "react";
import {CartContext} from "./CartContext";

const cartAmount = 4;

const CartWidget = (props) => {
	//Leer un estado global:
	/* const testContext = useContext(CartContext);
	console.log("CartWidget", testContext); */

	return (
		<a href="" className="navbar-cart">
			<i className="fas fa-shopping-cart"></i>
			<div className="navbar-cart__amount">
				<p>{props.valor}</p>
			</div>
		</a>
	);
};

export default CartWidget;
