import Item from "./Item";
import "../style/gallery.css";

const ItemList = (props) => {
	return (
		<>
			<div className="gallery">
				{props.products.length > 0
					? props.products.map((elem) => {
							return (
								<div
									key={elem.id}
									id={"gallery-" + elem.id}
									className="gallery-container"
								>
									<Item
										id={elem.id}
										img={elem.img}
										title={elem.title}
										price={elem.price}
									></Item>
								</div>
							);
					  })
					: console.log(props.products + "No funciona")}
			</div>
		</>
	);
};

export default ItemList;
