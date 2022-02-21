import {Link} from "react-router-dom";
import "../style/gallery.css";

const Item = (props) => {
	return (
		<>
			<Link to={`/item/${props.id}`} className="gallery-link">
				<img src={props.img} className="gallery-img"></img>
				<div className="gallery-title">
					<h3 className="gallery-title__item">{props.title}</h3>
				</div>
			</Link>
		</>
	);
};

export default Item;
