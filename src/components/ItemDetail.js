import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import "../style/gallery.css";
import {CartContext} from "./CartContext";

const ItemDetail = (props) => {
	const [qty, setQty] = useState(0);
	const test = useContext(CartContext);

	useEffect(() => {
		if (props.product && qty > 0) test.addItem(props.product, qty);
	}, [qty]);

	const onAdd = (unit) => {
		let quantityToAdd = 0;
		quantityToAdd += unit;

		setQty(quantityToAdd);
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
					{qty === 0 ? (
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
