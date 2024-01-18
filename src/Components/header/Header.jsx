import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <BrowserRouter>
        <header className="header">

        <nav className="barra">
            <Link to="#">mataplantas.com</Link>

                <ul className="menu">

                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Products">Productos</Link></li>
                <li><Link to="/Register">Registro</Link></li>
                <li><Link to="/Search">🔎</Link></li>
                <li><Link to="/Cart">🛒</Link></li>

                </ul>

                <button id="toggleBtn" className="button--modoOscuro"><svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#bf4f4e" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                    <span className="lableIt">Modo visual</span></button>


                <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" for="menu__btn"><span className="navicon"></span> </label>


            </nav>
        </header>
        </BrowserRouter>
    )
}

export default Header;