import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {CartContext} from "./CartContext";
import ItemList from "./ItemList";
import "../style/itemListContainer.css";

const ItemListContainer = () => {
	const test = useContext(CartContext);
	const [items, setItems] = useState([]);

	// const categoryId = useParams(); Esta variable devuelve un objeto, pero necesitamos su valor/key
	const {categoryId} = useParams(); // Mediante los signos {} destructuramos la variable para recibir solo su valor

	const fireStoreFetch = () => {
		let productsPromise = test.getFirebaseProducts();
		return productsPromise;
	};

	useEffect(() => {
		fireStoreFetch()
			.then((result) => {
				if (categoryId != undefined) {
					setItems(
						result.filter((obj) => obj.categoryID === parseInt(categoryId))
					);
				} else setItems(result);
			})
			.catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<>
			<div className="itemList-container">
				<ItemList products={items}></ItemList>
			</div>
		</>
	);
};

export default ItemListContainer;
