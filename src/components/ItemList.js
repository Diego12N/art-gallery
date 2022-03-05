import Item from "./Item";
/* import "../style/gallery.css"; */
import "../style/galleryItem.css";

const ItemList = (props) => {
	return (
		<>
			{/* <div className="gallery">
				{props.products.length > 0
					? props.products.map((elem) => {
							return (
								<div key={elem.id} className="item">
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
			</div> */}

			<div className="item-container">
				{props.products.length > 0
					? props.products.map((elem) => {
							return (
								<Item
									key={elem.id}
									id={elem.id}
									img={elem.img}
									title={elem.title}
									price={elem.price}
								></Item>
							);
					  })
					: console.log(props.products + "No funciona")}
			</div>
		</>
	);
};

export default ItemList;
