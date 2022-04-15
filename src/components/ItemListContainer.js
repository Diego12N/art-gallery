import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {CartContext} from "./CartContext";
import ItemList from "./ItemList";
import "../style/itemListContainer.css";
import {fireStoreFetch} from "../utils/fireStoreFetch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	// const categoryId = useParams(); Esta variable devuelve un objeto, pero necesitamos su valor/key
	const {categoryId} = useParams(); // Mediante los signos {} destructuramos la variable para recibir solo su valor

	useEffect(() => {
		fireStoreFetch(categoryId)
			.then((result) => {
				setItems(result);
			})
			.catch(() => setItems([]));
	}, [categoryId]);

	const renameSection = () => {
		switch (categoryId) {
			case "1":
				return "SOBRE CARTON";
			case "2":
				return "SOBRE LIENZO";
			case "3":
				return "SOBRE DURLOK";
			default:
				return "DESTACADOS";
		}
	};

	return (
		<>
			{items.length > 0 ? (
				<div className="itemList-container">
					<h1>{renameSection()}</h1>
					<ItemList products={items}></ItemList>
				</div>
			) : (
				<div className="detail detail-loading">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<b>Cargando...</b>
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
