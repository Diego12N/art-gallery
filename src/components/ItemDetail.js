import Item from "./Item";
import "../style/item.css";

const ItemDetail = (props) => {
	return (
		<>
			<div className="gallery-detail">
				<div className="gallery-container">
					<img src={props.img} className="gallery-img"></img>
					<div className="gallery-title">
						<h3 className="gallery-title__item">{props.title}</h3>
					</div>
					<div className="gallery-item__description">
						<p className="gallery-description">{props.description}</p>
						<p className="gallery-year">Año: {props.year}</p>
						<p className="gallery-price">Precio: ${props.price}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
