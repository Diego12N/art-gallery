import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import "../style/itemDetail.css";
import {CartContext} from "./CartContext";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
			<div className="detail__container">
				<div className="detail-img__container">
					<img src={props.product.img} className="detail-img"></img>
					<div className="detail-measures__container">
						<p>Medidas:</p>
						<p className="detail-measures">{props.product.measures}</p>
					</div>
				</div>
				<div className="detail__description">
					<div className="detail-title__container">
						<h3 className="detail__title">{props.product.title}</h3>
						<p className="detail-type">{props.product.description}</p>
						<p className="detail-year">Año: {props.product.year}</p>
					</div>
					<div className="detail-item__description">
						<div className="detail-price__container">
							<p className="detail-price__subtitle">Precio al contado:</p>
							<p className="detail-price">$ {props.product.price}</p>
							<p>
								<b>15% de descuento</b> pagando por transferencia bancaria.
							</p>
						</div>
						{props.product.stock > 0 ? (
							<>
								<p className="detail-stock">
									Stock: <b>{props.product.stock} unidades.</b>
								</p>
							</>
						) : (
							<p className="detail-stock noStock">Sin stock</p>
						)}
					</div>
					{props.product.stock > 0 &&
						(qty === 0 ? (
							<ItemCount
								stock={props.product.stock}
								initial="0"
								onAdd={onAdd}
							/>
						) : (
							<Link to="/cart" className="btn-toCart__link">
								<button className="btn-toCart">
									Ir al Carrito <FontAwesomeIcon icon={faAngleRight} />
								</button>
							</Link>
						))}
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
