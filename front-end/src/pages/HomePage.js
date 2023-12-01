import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Carousel from "../components/Carousel";
import ListProducts from "../components/ListProducts";
const HomePage = () => {
  // Estado para almacenar los datos de la API

  return (
    <>
      <div className="container-homePage">
        <Carousel />
        <section className="mt-3">
          <aside className="d-flex justify-content-between">
            <h5 className="fw-bold">Nuevos Productos</h5>
            <Link className="text-dark fw-bold"> Ver mas</Link>
          </aside>
          <p></p>

          <div className="d-flex flex-wrap">
            <ListProducts />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
