import Item from "./Item";
/* import "../style/gallery.css"; */
import "../style/galleryItem.css";
import "../style/loader.css";

const ItemList = (props) => {
	return (
		<>
			<div className="item-container">
				{props.products.length > 0 ? (
					props.products.map((elem) => {
						return (
							<>
								<Item
									key={elem.id}
									id={elem.id}
									img={elem.img}
									title={elem.title}
									price={elem.price}
								></Item>
							</>
						);
					})
				) : (
					<>
						<div className="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<b>Cargando...</b>
					</>
				)}
			</div>
		</>
	);
};

export default ItemList;
