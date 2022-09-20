import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
function NavBar() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">fiorusly-store♡</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">inicio</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogo
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/category/1">Medias</Link></li>
            <li><Link className="dropdown-item" to="/category/2">Zapatillas</Link></li>
            <li><Link className="dropdown-item" to="/category/3">Remeras</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/category/4">Productos Variados</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Carrito<CartWidget/></a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    );
  }
  
  export default NavBar;
  

  