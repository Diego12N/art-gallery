import {doc, getDoc} from "firebase/firestore";
import db from "./firebaseConfig";

export const fireStoreFetchOneItem = async (id) => {
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
