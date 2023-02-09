import {Link} from "react-router-dom";

const Secciones = () => {
    return (
    <>
        <li className="nav-item">
            <Link className="nav-link" to={"/"}>
                <button className="btn btn-dark">Inicio</button>
            <span className="visually-hidden">(current)</span>
            </Link>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>
                    <button className="btn btn-dark">Contacto</button>
                </Link>
            </li>
        </li>
     </>
    );
}

export default Secciones;
