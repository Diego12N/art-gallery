import {useContext} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import "../style/cartContainer.css";
import {Link} from "react-router-dom";

const Cart = () => {
	const test = useContext(CartContext);

	const RemoveCartList = () => {
		return (
			<button
				className="cart-btn__delete"
				onClick={() => {
					test.clear();
				}}
			>
				Borrar Todos
			</button>
		);
	};

	const BackToLandign = () => {
		return (
			<Link to="/">
				<button>Volver al Inicio</button>
			</Link>
		);
	};

	return (
		<>
			<h1>Carrito</h1>
			<div className="cart-container">
				{test.cartList.length > 0 ? (
					<>
						<div className="cart-container__item">
							{test.cartList.map((elem) => {
								return <CartItem key={elem.id} item={elem}></CartItem>;
							})}
							<RemoveCartList></RemoveCartList>
						</div>
						<div className="cart-total">
							<p>Confirmacion de Pago</p>
							<p>Sub Total: {test.calcSubTotal()}</p>
							<p>Descuento:</p>
							<b>Total a Pagar {test.calcTotal()}</b>
							<button></button>
						</div>
					</>
				) : (
					<>
						<h1 className="cart-empty__title">
							No hay productos en el carrito
						</h1>
						<BackToLandign></BackToLandign>
					</>
				)}
			</div>
		</>
	);
};

export default Cart;
