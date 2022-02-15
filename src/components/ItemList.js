import Item from "./Item";
import "../style/item.css";

const ItemList = (props) => {
	return (
		<>
			<div className="gallery">
				{props.products.length > 0
					? props.products.map((elem) => {
							return (
								<>
									<Item
										key={elem.id}
										img={elem.img}
										title={elem.title}
										description={elem.description}
										year={elem.year}
										price={elem.price}
									></Item>
								</>
							);
					  })
					: console.log(props.products)}
			</div>
		</>
	);
};

export default ItemList;
