import React from "react";
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/category/novelas">
            <li>Novelas</li>
            </NavLink>
          <NavLink to="/category/biografias">
            <li>Biografias</li>
            </NavLink>
          <NavLink to="/category/desarrollopersonal">
            <li>Desarrollo Personal</li>
            </NavLink>
          <NavLink to="/contacto">
            <li>Contacto</li>
            </NavLink>
          <NavLink to="/cart">
            <CartWidget />
            </NavLink>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar;


