import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Saludos desde App.js"/>

    </div>
  );
}

export default App;
