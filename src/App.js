import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="App">
          <NavBar />
          <Switch>

            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>

            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route path="/contacto">
              <h1> CONTACTO </h1>
            </Route>

            <Route path="/cart">
              <Cart />
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
