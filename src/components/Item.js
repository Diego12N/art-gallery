import {Link} from "react-router-dom";
import "../style/galleryItem.css";

const Item = (props) => {
	return (
		<>
			<div className="item">
				<img src={props.img} className="item-img"></img>
				<div className="item-description">
					<h3 className="item-title">{props.title}</h3>
					<Link to={`/item/${props.id}`} className="item-btn">
						Ver Detalle
					</Link>
				</div>
			</div>
		</>
	);
};

export default Item;
