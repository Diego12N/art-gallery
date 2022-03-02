import {useContext} from "react";
import {CartContext} from "./CartContext";

const CartItem = (props) => {
	const test = useContext(CartContext);

	/* 	let totalItemPrice = props.item.qty * props.item.price; */

	return (
		<div className="cart-item">
			<div className="cart-img__container">
				<img src={props.item.img} className="cart-item__img"></img>
			</div>

			<div className="cart-item__description">
				<h2>{props.item.name}</h2>
				<p>
					Cantidad: <b>{props.item.qty}</b>
				</p>
				<b>Precio {props.item.price}</b>
				<button
					onClick={() => {
						test.removeItem(props);
					}}
					className="cart-item__btn"
				>
					Borrar
				</button>
			</div>
		</div>
	);
};

export default CartItem;
