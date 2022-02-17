import {Link} from "react-router-dom";
import "../style/item.css";

const Item = (props) => {
	return (
		<>
			<Link to={`/item/${props.id}`}>
				<img src={props.img} className="gallery-img"></img>
				<div className="gallery-title">
					<h3 className="gallery-title__item">{props.title}</h3>
				</div>
			</Link>
		</>
	);
};

export default Item;
