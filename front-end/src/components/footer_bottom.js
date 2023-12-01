import img1 from "../assets/ac.png";
import img2 from "../assets/co.png";
import img3 from "../assets/cp.png";
const FooterBottom = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="recuadro ">
          <img src={img1} alt="Imagen 1" />
          <p className="fw-bold">
            Atencion directa con nuestro personal todo el tiempo
          </p>
        </div>
        <div className="recuadro">
          <img src={img2} alt="Imagen 2" />
          <p className="fw-bold">
            Cotizacion de nuestros productos o proyectos personales desde la
            comodidad de tu hogar
          </p>
        </div>
        <div className="recuadro">
          <img src={img3} alt="Imagen 3" />
          <p className="fw-bold">Tu propio espacio personal, comodo y seguro</p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
