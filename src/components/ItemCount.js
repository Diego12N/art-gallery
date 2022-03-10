import {useState} from "react";
import "../style/itemDetail.css";

const ItemCount = ({stock, initial, onAdd}) => {
	let [quantity, setQuantity] = useState(parseInt(initial));
	let [buttonActive, setButton] = useState(true);

	const agregar = () => {
		onAdd(quantity);
	};

	const increment = () => {
		if (quantity < stock) {
			setQuantity((quantity += 1));
		} else {
			setButton(false);
		}
	};

	const decrement = () => {
		if (quantity > initial && quantity <= stock) {
			setQuantity((quantity -= 1));
			setButton(true);
		}
	};

	return (
		<>
			<div className="detail-count">
				<div className="detail-count__container">
					<button className="btn-subtract" onClick={decrement}>
						-
					</button>
					<p className="detail-quantity">{quantity}</p>
					<button
						id="btn"
						className="btn-add"
						onClick={increment}
						disabled={!buttonActive}
					>
						+
					</button>
				</div>

				<button className="btn-add__cart" onClick={() => agregar()}>
					<i className="fas fa-shopping-cart fas-btn"></i>
					Agregar
				</button>
			</div>
		</>
	);
};

export default ItemCount;
