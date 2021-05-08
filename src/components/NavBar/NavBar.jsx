import React from "react";
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/category/novelas">
            <li>Novelas</li>
            </Link>
          <Link to="/contacto">
            <li>Contacto</li>
            </Link>
          <Link to="/cart">
            <CartWidget />
            </Link>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar;


