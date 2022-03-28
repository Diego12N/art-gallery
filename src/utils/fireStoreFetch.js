import {collection, getDocs, query, orderBy, where} from "firebase/firestore";
import db from "../utils/firebaseConfig";

export const fireStoreFetch = async (idCategory) => {
	let q;
	if (idCategory) {
		q = query(
			collection(db, "products"),
			where("categoryID", "==", parseInt(idCategory))
		);
	} else {
		q = query(collection(db, "products"), orderBy("title"));
	}

	const querySnapshot = await getDocs(q);
	const dataFromFirestore = querySnapshot.docs.map((document) => ({
		id: document.id,
		...document.data(),
	}));

	return dataFromFirestore;
};
