import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
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
	);
}

export default App;
