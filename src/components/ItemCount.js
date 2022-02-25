import {useState} from "react";
import "../style/ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
	let [item, setItem] = useState(parseInt(initial));
	let [buttonActive, setButton] = useState(true);

	const agregar = () => {
		onAdd(item);
	};

	const increment = () => {
		if (item < stock) {
			setItem((item += 1));
		} else {
			setButton(false);
		}
	};

	const decrement = () => {
		if (item > initial && item <= stock) {
			setItem((item -= 1));
			setButton(true);
		}
	};

	return (
		<>
			<div className="item-count">
				<div className="item-container">
					<button className="btn-subtract" onClick={decrement}>
						-
					</button>
					<p>{item}</p>
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
					Agregar
				</button>
			</div>
		</>
	);
};

export default ItemCount;
