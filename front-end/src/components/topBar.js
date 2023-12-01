import "../styles/TopNavbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/LogoNewEra.jpg";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const TopBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { token, logout } = useAuth();
  const [role, setRole] = useState("");

  // const isLoggedIn = localStorage.getItem("userRole");
  // console.log(isLoggedIn);
  useEffect(() => {
    // Función para actualizar la fecha y hora actual cada segundo
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };
    // Actualiza la fecha y hora cada segundo
    const intervalId = setInterval(updateDateTime, 1000);
    setRole(localStorage.getItem("userRole"));
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <header className="static ">
        <span>{currentDateTime.toLocaleString()}</span>{" "}
        <span>
          Visitanos en San Pablo Autopan, Toluca Méx.{" "}
          <b>
            <Link className="text-light"> Contactanos.</Link>
          </b>
        </span>{" "}
        <span>
          <b className="me-2 ">(+)7292284031 </b>{" "}
          <i className="bi bi-facebook me-2 icons-standar"></i>{" "}
          <i className="bi bi-whatsapp icons-standar"></i>{" "}
        </span>
      </header>
      <div className="topNavbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand me-3" to="/">
              <img src={logo} alt="logotipo" className="iconLogo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/cotizaciones"
                  >
                    Cotizaciones
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to="/"
                  >
                    Sistemas
                  </Link>

                  <ul className="dropdown-menu ">
                    <li>
                      <Link className="dropdown-item fw-bold">Impulso</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fw-bold">Cadena</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fw-bold">Control</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  hidden
                />
                <button className="btn rounded-circle me-3" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <div className="dropdown text-end me-4">
                <Link
                  to="#"
                  className="d-block link-body-emphasis text-decoration-none "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-cart-fill icons-standar"></i>
                </Link>
                <ul className="dropdown-menu text-small">
                  <li>
                    <Link className="dropdown-item fw-bold" to="/cart">
                      Ver carrito
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown text-end">
                <Link
                  to="#"
                  className="d-block link-body-emphasis text-decoration-none "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </Link>
                <ul className="dropdown-menu text-small">
                  {token ? (
                    <>
                      <li>
                        <Link
                          className="dropdown-item fw-bold"
                          to="../pages/UpdateData.html"
                        >
                          Actualizar Datos
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fw-bold"
                          to="../pages/DataCash.html"
                        >
                          Forma De Pago
                        </Link>
                      </li>
                      {role === "admin" ? (
                        <li>
                          <Link
                            className="dropdown-item fw-bold"
                            to="./users-admin"
                          >
                            Ver Usuarios
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}

                      <li>
                        <hr className="dropdown-divider fw-bold" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fw-bold"
                          onClick={logout}
                        >
                          Salir del perfil
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link className="dropdown-item fw-bold" to="/ogin">
                        Iniciar Sesion
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
