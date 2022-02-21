import {Children} from "react/cjs/react.production.min";

const {createContext, useState} = require("react");

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([]);

	//Esta funcion global se ejecuta en el ItemCount
	const addToCart = (item, unit) => {
		setCartList(item);
	};

	return (
		<CartContext.Provider value={{cartList, addToCart}}>
			{children}
		</CartContext.Provider>
	);
};
