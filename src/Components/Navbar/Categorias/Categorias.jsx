import { Link } from "react-router-dom";
import React from "react"

const Categorias = React.memo(() => {
    return (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <button className="btn btn-dark">Consolas</button></a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={"/category/1"}>Play Station</Link></li>
              <li><Link className="dropdown-item" to={"/category/2"}>Xbox</Link></li>
              <li><Link className="dropdown-item" to={"/category/3"}>PC</Link></li>
            </ul>
          </li>
    );
})

export default Categorias;
