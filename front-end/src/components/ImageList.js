import { useEffect, useState } from "react";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL } from "firebase/storage";
const ImageList = ({ productImages }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      console.log(productImages);
      const urls = await Promise.all(
        productImages.map(async (url) => {
          const storageRef = ref(storage, url.imgUrl);
          try {
            const imageUrl = await getDownloadURL(storageRef);
            return imageUrl;
          } catch (error) {
            console.error(
              `Error al obtener la URL de descarga para la ruta ${url.imgUrl}:`,
              error
            );
            return null;
          }
        })
      );

      setImageUrls(urls.filter((url) => url !== null));
    };

    fetchImageUrls();
  }, [productImages]);

  return (
    <div className="card-img-list ">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          {imageUrls.map((imageUrl, index) => (
            <div
              className={`carousel-item ${index !== 0 ? "" : "active"}`}
              key={index}
            >
              <img
                src={imageUrl}
                className="card-img-top img_prod_carousel"
                alt={`Imagen ${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageList;
