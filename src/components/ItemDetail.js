import ItemCount from "./ItemCount";
import "../style/item.css";

const ItemDetail = (props) => {
	const onAdd = (unit) =>
		alert("Se han agregado " + unit + " unidades al carrito");

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
					<ItemCount stock="5" initial="1" onAdd={onAdd} />
				</div>
			</div>
		</>
	);
};

export default ItemDetail;

{
	/* <Link to={props.id} className="gallery-detail">
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
	<ItemCount stock="5" initial="1" onAdd={onAdd} />
</div>
</Link> */
}
