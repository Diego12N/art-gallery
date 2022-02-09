import ItemCount from "./ItemCount";

const ItemListContainer = (gretting) => {
	return (
		<>
			<div>
				<div className="page-title">{gretting.section}</div>
				<ItemCount stock="5" initial="1" />
			</div>
		</>
	);
};

export default ItemListContainer;
