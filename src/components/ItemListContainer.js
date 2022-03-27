import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {CartContext} from "./CartContext";
import ItemList from "./ItemList";
import "../style/itemListContainer.css";
import {fireStoreFetch} from "../utils/fireStoreFetch";

const ItemListContainer = () => {
	const test = useContext(CartContext);
	const [items, setItems] = useState([]);

	// const categoryId = useParams(); Esta variable devuelve un objeto, pero necesitamos su valor/key
	const {categoryId} = useParams(); // Mediante los signos {} destructuramos la variable para recibir solo su valor

	useEffect(() => {
		fireStoreFetch(categoryId)
			.then((result) => {
				setItems(result);
			})
			.catch((err) => console.log("Error", err));
	}, [categoryId]);

	return (
		<>
			<div className="itemList-container">
				<h1>DESTACADOS</h1>
				<ItemList products={items}></ItemList>
			</div>
		</>
	);
};

export default ItemListContainer;
