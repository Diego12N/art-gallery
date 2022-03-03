// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCp97lTogvOyX4wTziJBvQrKEVCdsUVk90",
	authDomain: "art-gallery-898de.firebaseapp.com",
	projectId: "art-gallery-898de",
	storageBucket: "art-gallery-898de.appspot.com",
	messagingSenderId: "621206670085",
	appId: "1:621206670085:web:2defb2d4471686ca4d456c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
