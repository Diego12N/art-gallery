import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {CartContext} from "./CartContext";
import {doc, getDoc} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);
	/* const test = useContext(CartContext); */

	const {id} = useParams();

	/* 	const fireStoreFetch = () => {
		let productPromise = test.getFirebaseProducts();
		return productPromise;
	}; */

	const fireStoreFetch = async (id) => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return {
				id: id,
				...docSnap.data(),
			};
		} else {
			console.log("No such document!");
		}
	};

	useEffect(() => {
		fireStoreFetch(id)
			.then((result) => {
				console.log(result);
				setItem(result);
			})
			.catch((err) => console.log(err));
	}, [id]);

	/* 	useEffect(() => {
		fireStoreFetch(id)
			.then((result) => {
				console.log(result);
				setItem(result.find((document) => document.id === id));
			})
			.catch((err) => console.log(err));
	}, [id]);
 	*/
	return (
		<>
			<div className="item-detail__container">
				<ItemDetail product={item}></ItemDetail>
			</div>
		</>
	);
};

export default ItemDetailContainer;
