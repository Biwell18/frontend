import React from "react";
import "../Nav/Nav.css"

const Nav = () => {
return(
    <>
        <div className="Nav-container">
          <div className="Logo"><img src="https://professorguanabara.github.io/projeto-android/imagens/bugdroid.png" alt="logo" /></div>
          <nav className="Nav-Subcontainer">
            <ul className="Nav-ul-list">
              <li className="Nav-list"><a href="#">Home</a></li>
              <li className="Nav-list"><a href="#">Produtos</a></li>
              <li className="Nav-list"><a href="#">Sobre nós</a></li>
              <li className="Nav-list"><a href="#">Suporte</a></li>
            </ul>
          </nav>
        </div>
    </>
  )
}
export default Nav;