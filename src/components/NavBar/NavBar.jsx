import React from "react"
import './navbar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
return (
    <header>
      <nav>
        <ul>
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Catálogo</li>
          </a>
          <a href="#">
            <li>Contacto</li>
          </a>
          <a href="#">
            <CartWidget />
          </a>
        </ul>
      </nav>

    </header>
)
}

export default NavBar;


