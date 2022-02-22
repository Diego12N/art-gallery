import {useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import "../style/gallery.css";

const ItemDetail = (props) => {
	const [itemAdd, setItemAdd] = useState(0);
	const onAdd = (unit) => {
		let quantityToAdd = 0;
		quantityToAdd += unit;

		if (0 < quantityToAdd) {
			setItemAdd(quantityToAdd);
		}
	};
	return (
		<>
			<div className="gallery-detail">
				<div className="gallery-container">
					<img src={props.product.img} className="gallery-img"></img>
					<div className="gallery-title">
						<h3 className="gallery-title__item">{props.product.title}</h3>
					</div>
					<div className="gallery-item__description">
						<p className="gallery-description">{props.product.description}</p>
						<p className="gallery-year">Año: {props.product.year}</p>
						<p className="gallery-price">Precio: ${props.product.price}</p>
					</div>
					{itemAdd === 0 ? (
						<ItemCount stock="5" initial="0" onAdd={onAdd} />
					) : (
						<Link to="/cart">
							<button>Ir al Carrito</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
