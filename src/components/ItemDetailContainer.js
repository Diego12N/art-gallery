import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {CartContext} from "./CartContext";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	const test = useContext(CartContext);

	const {id} = useParams();

	const fireStoreFetch = () => {
		let productPromise = test.getFirebaseProducts();
		return productPromise;
	};

	useEffect(() => {
		fireStoreFetch()
			.then((result) => setItem(result.find((document) => document.id === id)))
			.catch((err) => console.log(err));
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
