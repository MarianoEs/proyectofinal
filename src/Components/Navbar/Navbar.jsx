import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Gamer's House</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse show" id="navbarColor01" style={{}}>
        <ul className="navbar-nav me-auto">
          <Secciones/>
          <Categorias/>
        </ul>
        <CartWidget/>
      </div>
      
    </div>
  </nav>
  );
}

export default Navbar;
