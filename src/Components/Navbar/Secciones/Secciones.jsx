import {Link} from "react-router-dom";
import React from "react"

const Secciones = React.memo(() => {
    return (
    <>
        <li className="nav-item">
            <Link className="nav-link" to={"/"}>
                <button className="btn btn-dark">Inicio</button>
            <span className="visually-hidden">(current)</span>
            </Link>
        </li>
        <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>
                    <button className="btn btn-dark">Contacto</button>
                </Link>
        </li>
        
     </>
    );
})

export default Secciones;
