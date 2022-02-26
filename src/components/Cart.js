import {useContext} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import "../style/cartContainer.css";

const Cart = () => {
	const test = useContext(CartContext);

	return (
		<>
			<h1>Carrito</h1>
			<div className="cart-container">
				<div className="cart-container__item">
					{test.cartList.length > 0
						? test.cartList.map((elem) => {
								return <CartItem key={elem.id} item={elem}></CartItem>;
						  })
						: console.log("No hay objetos")}
				</div>
				<button
					className="cart-btn__delete"
					onClick={() => {
						test.clear();
					}}
				>
					Borrar Todos
				</button>
			</div>
		</>
	);
};

export default Cart;
