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
									<Item
										img={elem.img}
										title={elem.title}
										description={elem.description}
										year={elem.year}
										price={elem.price}
									></Item>
								</div>
							);
					  })
					: console.log(props.products)}
			</div>
		</>
	);
};

export default ItemList;
