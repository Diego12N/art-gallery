import {useContext} from "react";
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

	let itemDetail = test.cartList.map((item) => {
		return {
			id: item.id,
			title: item.name,
			qty: item.qty,
			price: item.price,
		};
	});

	const returnTotalToPay = () => {
		let itemsPrice = itemDetail.map((item) => {
			return item.price;
		});

		let total = itemsPrice.reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		});

		return total;
	};

	const createOrder = () => {
		let order = {
			date: serverTimestamp(),
			comprador: {
				email: "diego.naranjo@gmail.com",
				name: "Diego Naranjo",
				phone: "3514236583",
			},
			items: itemDetail,
			total: test.calcTotal(),
		};

		console.log(order);

		const createOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};

		createOrderInFirestore()
			.then((result) => {
				alert("El numero de orden es: " + result.id);
				test.cartList.map(async (item) => {
					console.log("Cantidad", item.qty);
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
							<button onClick={createOrder}> Confirmacion de Pago</button>
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
