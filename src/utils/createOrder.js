import {
	collection,
	serverTimestamp,
	setDoc,
	doc,
	updateDoc,
	increment,
} from "firebase/firestore";
import db from "./firebaseConfig";

export const createOrder = async (hasDiscount, context) => {
	let itemDetail = context.cartList.map((item) => {
		return {
			id: item.id,
			title: item.name,
			qty: item.qty,
			price: item.price,
		};
	});

	let order = {
		date: serverTimestamp(),
		comprador: {
			email: "diego.naranjo@gmail.com",
			name: "Diego Naranjo",
			phone: "3514236583",
		},
		items: itemDetail,
		discount: hasDiscount,
		total: context.calcTotal(hasDiscount),
	};

	const createOrderInFirestore = async () => {
		const newOrderRef = doc(collection(db, "orders"));
		await setDoc(newOrderRef, order);
		return newOrderRef;
	};

	return createOrderInFirestore()
		.then((result) => {
			order = {...order, id: result.id};
			context.cartList.map(async (item) => {
				const itemRef = doc(db, "products", item.id);
				await updateDoc(itemRef, {
					stock: increment(-item.qty),
				});
			});
			context.clear();
			return order;
		})
		.catch(() => {
			return null;
		});
};
