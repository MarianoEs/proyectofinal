

const Categorias = () => {
    return (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <button className="btn btn-dark">Categorias</button></a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Play Station</a>
              <a className="dropdown-item" href="#">Xbox</a>
              <a className="dropdown-item" href="#">PC</a>
              <a className="dropdown-item" href="#">Nintendo</a>
            </div>
          </li>
    );
}

export default Categorias;
