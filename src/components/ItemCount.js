import {useState} from "react";
import "../style/ItemCount.css";

const ItemCount = ({stock, initial}) => {
	let [item, setItem] = useState(1);

	const button = document.getElementById("btn");
	const increment = () => {
		if (item < stock) {
			setItem(item + 1);
		} else {
			button.disabled = true;
		}
	};

	const decrement = () => {
		if (item > initial && item <= stock) {
			setItem(item - 1);
			button.disabled = false;
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
					<button id="btn" className="btn-add" onClick={increment}>
						+
					</button>
				</div>

				<button>Agregar</button>
			</div>
		</>
	);
};

export default ItemCount;
