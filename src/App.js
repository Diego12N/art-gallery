import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			{/* <ItemListContainer section="Home" /> */}
			<ItemDetailContainer></ItemDetailContainer>
		</>
	);
}

export default App;
