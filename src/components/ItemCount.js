import {useState} from "react";
import "../style/ItemCount.css";

const ItemCount = ({key, stock, initial}) => {
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
			<div id={"count-" + key} className="item-count">
				<div className="item-container">
					<button className="btn-subtract" onClick={decrement}>
						-
					</button>
					<p>{item}</p>
					<button id="btn" className="btn-add" onClick={increment}>
						+
					</button>
				</div>

				<button className="btn-add__cart">Agregar</button>
			</div>
		</>
	);
};

export default ItemCount;
