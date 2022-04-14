import {useContext, useState} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import "../style/cartContainer.css";
import {createOrder} from "../utils/createOrder";
import {ModalConfirm} from "./ModalConfirm";
import CartEmpty from "./CartEmpty";
import {useEffect} from "react";

const Cart = () => {
	const test = useContext(CartContext);
	const [compra, setCompra] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [discount, setDiscount] = useState(false);

	const payConfirm = async (hasDiscount, context) => {
		const newOrder = await createOrder(hasDiscount, context);

		if (newOrder && newOrder.id) {
			setCompra(newOrder);
			setShowModal(true);
		}
	};

	const RemoveCartList = () => {
		return (
			<div className="btn-delete__container">
				<button
					className="cart-btn__delete"
					onClick={() => {
						test.clear();
					}}
				>
					Borrar Todos
				</button>
			</div>
		);
	};

	return (
		<>
			<div className="cart">
				<div className="cart-container">
					{test.cartList.length > 0 && (
						<>
							<div className="cart-body">
								<div className="cart-title__body">
									<div className="cart-title">
										{window.innerWidth > 768 ? (
											<>
												<h1 className="title">Articulo</h1>
												<div className="cart-subtitles">
													<p>Cantidad</p>
													<p>Subtotal</p>
													<p></p>
												</div>
											</>
										) : (
											<h1 className="title">Articulo</h1>
										)}
									</div>
								</div>
								<div className="cart-item__container">
									{test.cartList.map((elem) => {
										return <CartItem key={elem.id} item={elem}></CartItem>;
									})}
								</div>
								<RemoveCartList></RemoveCartList>
							</div>
						</>
					)}
					{test.cartList.length > 0 ? (
						<>
							<div className="cart-total">
								<div className="cart-total__container">
									<div className="cart-total-title">
										<p className="total-title">Detalle de Compra</p>
									</div>
									<div className="buy-detail">
										<div className="buy-section__detail">
											<b>SUBTOTAL</b>
											<p className="bold">${test.calcSubTotal()}</p>
										</div>
										<div className="buy-section__detail">
											<b>DESCUENTO</b>
											<p className="bold">${test.showDiscount(discount)}</p>
										</div>
										<div className="buy-section__detail">
											<b>TOTAL</b>
											<p className="bold">${test.calcTotal(discount)}</p>
										</div>
									</div>
									<div className="buy-section__detail">
										<form id="form-discount">
											<div className="form-discount__container">
												<label>
													Pago transferencia bancaria{" "}
													<b>{"(Descuento del 15%)"}</b>
													<input
														type="checkbox"
														name="discount"
														id="discount"
														onChange={(e) => {
															if (e.target.checked) {
																return setDiscount(true);
															} else setDiscount(false);
														}}
													/>
												</label>
											</div>
										</form>
									</div>
									<div className="buy-section__detail section-button">
										<button
											className="buy-button"
											onClick={() => {
												payConfirm(discount, test);
											}}
										>
											{" "}
											Confirmacion de Pago
										</button>
									</div>
								</div>
							</div>
						</>
					) : (
						<CartEmpty></CartEmpty>
					)}
				</div>
			</div>
			{showModal && (
				<ModalConfirm orderDetails={compra} show={showModal}></ModalConfirm>
			)}
		</>
	);
};

export default Cart;
