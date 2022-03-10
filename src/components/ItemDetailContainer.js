import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore";
import db from "../utils/firebaseConfig";
import "../style/itemDetail.css";

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);

	const {id} = useParams();

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
				setItem(result);
			})
			.catch((err) => console.log(err));
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
						<ItemDetail product={item}></ItemDetail>
					</div>
				</>
			)}
		</>
	);
};

export default ItemDetailContainer;
