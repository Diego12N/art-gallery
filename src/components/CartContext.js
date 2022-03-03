import {createContext, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import db from "../utils/firebaseConfig";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([]);

	const getFirebaseProducts = async () => {
		const querySnapshot = await getDocs(collection(db, "products"));
		const dataFromFirestore = querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		}));

		return dataFromFirestore;
	};

	const calcSubTotal = () => {
		let subTotal = cartList.map((item) => item.price);
		return subTotal.reduce(
			(previousValue, currentValue) => previousValue + currentValue
		);
	};

	const calcTotal = () => {
		return calcSubTotal();
	};

	const calcItemsQty = () => {
		let quantities = cartList.map((item) => item.qty);
		return quantities.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		);
	};

	const isInCart = (item, qty, price) => {
		let elementIndex = cartList.findIndex((obj) => {
			return obj.id === item.id;
		});

		if (cartList.length > 0 && elementIndex != -1) {
			cartList[elementIndex].qty += qty;
			cartList[elementIndex].price += price;
		} else return;
	};

	const addItem = (item, unit) => {
		let total = item.price * unit;
		let objExist = cartList.some((obj) => obj.id === item.id);

		if (objExist) {
			isInCart(item, unit, total);
		} else {
			setCartList([
				...cartList,
				{
					id: item.id,
					img: item.img,
					name: item.title,
					price: total,
					qty: unit,
				},
			]);
		}
	};

	const removeItem = (item) => {
		let object = cartList.filter((elem) => {
			return elem.id !== item.item.id;
		});

		setCartList(object);
	};

	const clear = () => {
		setCartList([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				removeItem,
				clear,
				calcItemsQty,
				calcSubTotal,
				calcTotal,
				getFirebaseProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
