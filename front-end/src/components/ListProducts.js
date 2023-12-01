import { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";
// import { Link } from "react-router-dom";
// import { storage } from "../utils/firebase";
// import { ref, getDownloadURL } from "firebase/storage";
import { useAuth } from "../components/AuthContext";

const ListProducts = () => {
  const [products, setProducts] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchData();
  }, []);
  const addToCart = async (id_prod) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/cart/add-product",
        {
          productId: id_prod,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Agregado exitosamente");
      console.log(response);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };
  return (
    <>
      {products?.products.map((product) => (
        <div className="card m-3" style={{ width: "18rem" }} key={product.id}>
          <ImageList productImages={product.prosuctImgs} />
          <div className="card-body">
            <h5 className="card-title fw-bold">{product.title}</h5>
            <p className="card-text fw-bold">{product.description}</p>
            <h5 className="card-subtitle mb-2  fw-bold text-success">
              ${product.price}
            </h5>
            <button
              href="#"
              className="btn btn-primary fw-bold"
              onClick={() => addToCart(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart-check-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              Agregar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default ListProducts;
