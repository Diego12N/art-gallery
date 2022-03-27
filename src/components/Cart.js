import {useContext, useState, useEffect} from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import "../style/cartContainer.css";
import {Link} from "react-router-dom";
import {
	collection,
	serverTimestamp,
	setDoc,
	doc,
	updateDoc,
	increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
	const test = useContext(CartContext);
	const [discount, setDiscount] = useState(false);

	let itemDetail = test.cartList.map((item) => {
		return {
			id: item.id,
			title: item.name,
			qty: item.qty,
			price: item.price,
		};
	});

	const createOrder = () => {
		let order = {
			date: serverTimestamp(),
			comprador: {
				email: "diego.naranjo@gmail.com",
				name: "Diego Naranjo",
				phone: "3514236583",
			},
			items: itemDetail,
			discount: discount,
			total: test.calcTotal(discount),
		};

		const createOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};

		createOrderInFirestore()
			.then((result) => {
				alert("El numero de orden es: " + result.id);
				test.cartList.map(async (item) => {
					const itemRef = doc(db, "products", item.id);
					await updateDoc(itemRef, {
						stock: increment(-item.qty),
					});
				});
				test.clear();
			})
			.catch((err) => console.log("Error: ", err));
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

	const BackToLandign = () => {
		return (
			<Link to="/">
				<button>Volver al Inicio</button>
			</Link>
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
										<h1 className="title">Articulo</h1>
										<div className="cart-subtitles">
											<p>Cantidad</p>
											<p>Subtotal</p>
											<p></p>
										</div>
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
											<p>${test.calcSubTotal()}</p>
										</div>
										<div className="buy-section__detail">
											<b>DESCUENTO</b>
											<p>${test.showDiscount(discount)}</p>
										</div>
										<div className="buy-section__detail">
											<b>TOTAL</b>
											<p>${test.calcTotal(discount)}</p>
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
												createOrder();
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
						<>
							<h1 className="cart-empty__title">
								No hay productos en el carrito
							</h1>
							<BackToLandign></BackToLandign>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
