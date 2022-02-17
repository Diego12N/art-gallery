import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	let is_ok = true;

	const {id} = useParams();

	const products = [
		{
			id: 1,
			title: "El Paso",
			description: "Técnica mixta s/ Cartón",
			categoryID: 1,
			measures: "21x21cm",
			year: "2022",
			img: "../images/01.jpg",
			price: "1500",
		},
		{
			id: 2,
			title: "Sumergirse en lo profundo",
			description: "Técnica mixta s/ Cartón",
			categoryID: 1,
			measures: "136x48cm",
			year: "2022",
			img: "../images/02.jpg",
			price: "2300",
		},
		{
			id: 3,
			title: "Lo inevitable",
			description: "Técnica mixta s/ lienzo",
			categoryID: 2,
			measures: "29x21cm",
			year: "2022",
			img: "../images/03.jpg",
			price: "2500",
		},
		{
			id: 4,
			title: "La cuenta regresiva",
			description: "Técnica mixta s/ durlok",
			categoryID: 3,
			measures: "29x21cm",
			year: "2022",
			img: "../images/04.jpg",
			price: "2200",
		},
		{
			id: 5,
			title: "Ardiendo",
			description: "Técnica mixta s/ lienzo",
			categoryID: 2,
			measures: "40x60cm",
			year: "2021",
			img: "../images/05.jpg",
			price: "1850",
		},
		{
			id: 6,
			title: "Vehemencia",
			description: "Técnica mixta s/ lienzo",
			categoryID: 2,
			measures: "40x60cm",
			year: "2021",
			img: "../images/06.jpg",
			price: "1950",
		},
		{
			id: 7,
			title: "Tiempo",
			description: "Técnica mixta s/ lienzo",
			categoryID: 2,
			measures: "100x60cm",
			year: "2021",
			img: "../images/07.jpg",
			price: "1560",
		},
		{
			id: 8,
			title: "Mixto",
			description: "Técnica mixta s/ Cartón",
			categoryID: 1,
			measures: "21x55cm",
			year: "2022",
			img: "../images/08.jpg",
			price: "1750",
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
			}, timeout);
		});
	};

	function getItem() {
		customFetch(
			1000,
			products.find((item) => item.id === parseInt(id))
		)
			.then((res) => {
				setItem(res);
			})
			.catch((err) => {
				return console.log("Hubo un problema con la peticion" + err);
			});
	}

	useEffect(() => {
		getItem();
	}, [id]);

	return (
		<>
			<div className="item-detail__container">
				<ItemDetail product={item}></ItemDetail>
			</div>
		</>
	);
};

export default ItemDetailContainer;
