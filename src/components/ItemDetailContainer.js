import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "../style/itemDetail.css";
import {fireStoreFetch} from "../utils/fireStoreFetch";
import {fireStoreFetchOneItem} from "../utils/fireStoreFetchOneItem.js";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const [ItemsRelated, setItemsRelated] = useState([]);

	const {id} = useParams();

	useEffect(() => {
		fireStoreFetchOneItem(id)
			.then((result) => {
				setItem(result);
				fireStoreFetch(result.categoryID)
					.then((elem) => {
						let objectRelated = elem.filter((obj) => {
							return obj.id != result.id && obj.stock > 0;
						});
						setItemsRelated(objectRelated);
					})
					.catch(() => setItemsRelated([]));
			})
			.catch(() => setItem([]));
	}, [id]);

	return (
		<>
			{item.length === 0 ? (
				<div className="detail detail-loading">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<b>Cargando...</b>
				</div>
			) : (
				<>
					<div className="detail">
						<ItemDetail product={item} newClass="item-related"></ItemDetail>
					</div>
					{ItemsRelated.length > 0 && (
						<div className="item-related__container">
							<div className="item-related__title">
								<h1>RECOMENDADOS</h1>
							</div>
							<ItemList products={ItemsRelated}></ItemList>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default ItemDetailContainer;
