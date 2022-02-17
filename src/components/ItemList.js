import Item from "./Item";
import "../style/item.css";

const ItemList = (props) => {
	return (
		<>
			<div className="gallery">
				{props.products.length > 0
					? props.products.map((elem) => {
							return (
								<div key={elem.id} className="gallery-container">
									<Item id={elem.id} img={elem.img} title={elem.title}></Item>
								</div>
							);
					  })
					: console.log(props.products + "No funciona")}
			</div>
		</>
	);
};

export default ItemList;
