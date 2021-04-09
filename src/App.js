import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="App">
          <NavBar />
          <Switch>

            <Route exact path="/">
              <ItemListContainer greeting="Saludos desde App.js" />
            </Route>

            <Route path="/category/:categoryId">
              <ItemListContainer greeting="Saludos desde App.js" />
            </Route>

            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route path="/contacto">
              <h1> CONTACTO </h1>
            </Route>

            <Route path="/cart">
              <h1> CARRITO </h1>
            </Route>

            <Route path="*">
              <h1> ERROR 404: Not Found.</h1>
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
