import {} from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

function Nav(){
  return(

    <div className="nav_cont">
      <div id="nav_header">
        <h1>React</h1>
      </div>
      <div className="nav_links">
          <NavLink to="/" id="butLink">Home</NavLink>
          <NavLink to="produtos" id="butLink">Produtos</NavLink>
          <NavLink to="sobre" id="butLink">Sobre</NavLink>
      </div>
    </div>
 
  )
}

export default Nav