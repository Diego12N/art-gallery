import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import "../style/itemListContainer.css";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	let is_ok = true;

	const products = [
		{
			id: 1,
			title: "El Paso",
			description: "Técnica mixta s/ Cartón",
			year: "2022",
			img: "./images/01.jpg",
			price: "1500",
		},
		{
			id: 2,
			title: "Sumergirse en lo profundo",
			description: "Pintura s/ cartel mdf",
			year: "2022",
			img: "./images/02.jpg",
			price: "2300",
		},
		{
			id: 3,
			title: "Lo inevitable",
			description: "Técnica mixta s/ lienzo",
			year: "2022",
			img: "./images/03.jpg",
			price: "2500",
		},
	];

	const customFetch = (timeout, data) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (is_ok) {
					resolve(data);
				} else {
					reject("KO");
				}
			});
		}, timeout);
	};

	function getItem() {
		customFetch(2000, products)
			.then((res) => {
				setItems(res);
			})
			.catch((err) => {
				return console.log("Hubo un problema con la peticion" + err);
			});
	}

	useEffect(() => {
		setTimeout(() => {
			getItem();
		}, 2000);
	}, []);

	return (
		<>
			<div className="itemList-container">
				<ItemList products={items}></ItemList>
			</div>
		</>
	);
};

export default ItemListContainer;
