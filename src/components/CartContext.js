import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([]);

	//Esta funcion global se ejecuta en el ItemCount

	const isInCart = (id, qty) => {};

	const addItem = (item, unit) => {
		let total = item.price * unit;

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

/* let itemListVerification = cartList.some((elem) => {
	return elem.id === item.id;
});

if (!itemListVerification) {
	setCartList([
		...cartList,
		{
			id: item.id,
			img: item.img,
			name: item.title,
			price: item.price,
			qty: unit,
		},
	]);
} else {
	cartList.map((elem) => {

	});
}  */
