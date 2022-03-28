import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import "./App.css";
import {Footer} from "./components/Footer";
import {ContactPage} from "./components/ContactPage";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer />}
					></Route>
					<Route path="/cart" element={<Cart></Cart>}></Route>
					<Route path="/contact" element={<ContactPage></ContactPage>}></Route>
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
