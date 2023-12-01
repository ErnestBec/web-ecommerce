import imgCarousel1 from "../assets/cortina1.webp";
import imgCarousel2 from "../assets/cortina2.webp";
import imgCarousel3 from "../assets/cortina3.webp";
import imgCarousel4 from "../assets/cortina4.webp";
import imgCarousel5 from "../assets/cortina5.webp";
import imgCarousel6 from "../assets/cortina6.webp";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imgCarousel1}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgCarousel2}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgCarousel3}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgCarousel4}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgCarousel5}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imgCarousel6}
              className="d-block w-100"
              alt="imagen carousel cortina"
              style={{ height: "300px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
