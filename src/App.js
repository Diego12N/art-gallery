import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartContextProvider} from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<CartContextProvider value={[1, 2, 3]}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer />}
					></Route>
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
