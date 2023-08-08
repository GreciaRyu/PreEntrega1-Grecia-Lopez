import CartWidget from "../CartWidget";
import logo from "../../images/Logo.png";
import "./styles.css";


const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="60" height="40" />
            </a>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <CartWidget />
                  </a>
                </li>
              </ul>  
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar
