import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import "../style/header.css";
import {CartContext} from "./CartContext";
import {
	CartContainer,
	CartCount,
	CartIcon,
} from "./styleComponents/NavbarStyles";

const CartWidget = () => {
	const test = useContext(CartContext);

	let cartItemQuantitie = test.calcItemsQty();

	return (
		<CartContainer>
			<CartIcon icon={faShoppingCart} />
			{cartItemQuantitie > 0 && (
				<CartCount>
					<p>{cartItemQuantitie}</p>
				</CartCount>
			)}
		</CartContainer>
	);
};

export default CartWidget;
