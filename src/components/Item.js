import {Link} from "react-router-dom";
import "../style/gallery.css";

const Item = (props) => {
	return (
		<>
			<Link to={`/item/${props.id}`} className="gallery-link">
				<img src={props.img} className="gallery-img"></img>
				<div className="gallery-description__container">
					<div className="gallery-title">
						<h3 className="gallery-title__item">{props.title}</h3>
						<p className="gallery-price__item">$ {props.price}</p>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Item;
