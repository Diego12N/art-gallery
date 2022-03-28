import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([]);

	const calcSubTotal = () => {
		let subTotal = cartList.map((item) => item.total);
		return subTotal.reduce(
			(previousValue, currentValue) => previousValue + currentValue
		);
	};

	const showDiscount = (discount) => {
		let subTotal = calcSubTotal();
		let totalDiscount = subTotal * (15 / 100);

		if (discount) {
			return totalDiscount;
		} else {
			return "0.00";
		}
	};

	const calcTotal = (discount) => {
		let subTotal = calcSubTotal();
		let totalDiscount = subTotal * (15 / 100);
		let totalWithdiscount = subTotal - totalDiscount;

		if (discount) {
			return totalWithdiscount;
		} else {
			return subTotal;
		}
	};

	const isInCart = (item, qty, price) => {
		let elementIndex = cartList.findIndex((obj) => {
			return obj.id === item.id;
		});

		if (cartList.length > 0 && elementIndex != -1) {
			const copyCartList = [...cartList];

			copyCartList[elementIndex].qty += qty;
			copyCartList[elementIndex].total += price;

			setCartList([...copyCartList]);
		}
	};

	const calcItemsQty = () => {
		let arrayQuantities = cartList.map((item) => item.qty);
		let quantitie = arrayQuantities.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		);

		return quantitie;
	};

	const addItem = (item, unit) => {
		let total = item.total * unit;
		let objExist = cartList.some((obj) => obj.id === item.id);

		if (objExist) {
			isInCart(item, unit, total);
		} else {
			setCartList([
				...cartList,
				{
					id: item.id,
					stock: item.stock,
					img: item.img,
					name: item.title,
					measures: item.measures,
					price: item.price,
					total: total,
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
				showDiscount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
