import { useEffect, useState } from "react";
import axios from "axios";
// import ImageList from "./ImageList";
// import { storage } from "../utils/firebase";
// import { ref, getDownloadURL } from "firebase/storage";
import { useAuth } from "../components/AuthContext";
const CardProductsinCart = () => {
  const [products, setProducts] = useState(null);
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let totalCost = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/cart/products-cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al obtener datos: {error.message}</p>;
  }
  console.log(products);

  products.map(
    (product) => (totalCost = totalCost + product.precio * product.cantidad)
  );
  return (
    <>
      <div className="container-homePage mt-5 mb-5 d-flex flex-column justify-content-center">
        <h4 className="mt-3 mb-4 fw-bold"> Carrito de Compras</h4>
        {products.map((product, index) => (
          <div
            key={index}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <div className="card mb-3 " style={{ width: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  {/* <ImageList productImages={product.prosuctImgs} /> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{product.product}</h5>
                    <p className="card-text fw-bold">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary fw-bold">
                        {product.cantidad}
                      </small>
                    </p>
                    <h5 className="text-success fw-bold">${product.precio}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="btn btn-danger m-2">Quitar</button>
              <button className="btn btn-primary m-2">Agregar</button>
            </div>
          </div>
        ))}
        <hr className="m-0" />
        <div className="d-flex justify-content-evenly mt-4">
          <div>
            <button className="btn btn-danger m-2">Eliminar productos</button>
            <button className="btn btn-success m-2">Comprar</button>
          </div>
          <div>
            <h3 className="text-success">
              Total: $<b>{totalCost}</b>{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProductsinCart;
