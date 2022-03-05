import {Link} from "react-router-dom";
import "../style/galleryItem.css";

const Item = (props) => {
	return (
		<>
			{/* <Link to={`/item/${props.id}`} className="gallery-link">
				<img src={props.img} className="gallery-img"></img>
				<div className="gallery-description__container">
					<div className="gallery-title">
						<h3 className="gallery-title__item">{props.title}</h3>
						<p className="gallery-price__item">$ {props.price}</p>
					</div>
				</div>
			</Link> */}

			<div className="item">
				<img src={props.img} className="item-img"></img>
				<div className="item-description">
					<h3 className="item-title">{props.title}</h3>
					{/* <p className="item-price">${props.price}</p> */}
					<Link to={`/item/${props.id}`} className="item-btn">
						Ver Detalle
					</Link>
				</div>
			</div>
		</>
	);
};

export default Item;
