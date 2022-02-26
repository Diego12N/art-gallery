import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([]);

	//Esta funcion global se ejecuta en el ItemCount

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
		<CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
