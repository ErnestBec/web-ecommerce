import "../styles/Footer.css";
import iconPayPal from "../assets/PayPal-Logo.webp";
import iconMastercard from "../assets/mastercard-logo.webp";
import iconVisa from "../assets/visa-logo.webp";
import iconDiscover from "../assets/discover-logo.webp";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-content-footer">
          <div className="d-flex mt-2">
            <h1>
              !Tu proyecto en manos <br />
              de profesionales¡
            </h1>
          </div>
          <form className=" g-3 d-flex me-5">
            <div className="col-auto me-2 ">
              <input
                type="email"
                readOnly
                className="form-control fw-bold align-items-center"
                id="staticEmail2"
                placeholder="email@eejemplo.com"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="container-content-footer align-items-start row mt-4">
          <div className="col  d-flex justify-content-center flex-column">
            <h6 className="fw-bold d-flex justify-content-left">Material</h6>
            <ul className="list-footer">
              <li>Europea Zintro</li>
              <li>Europea Galvanizado</li>
              <li>Europea Blanco</li>
              <li>Plana Zintro</li>
              <li>Plana Galvanizado</li>
              <li>Plana Blanco</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="fw-bold d-flex justify-content-left">Sistema</h6>
            <ul className="list-footer">
              <li>Impulso</li>
              <li>Cadena</li>
              <li>Motor y RFID</li>
              <li>Motor y Control</li>
              <li>Motor y Botonera</li>
            </ul>
          </div>
          <div className="col ">
            <h6 className="fw-bold d-flex justify-content-left">Herreria</h6>
            <ul className="list-footer">
              <li>Puertas</li>
              <li>Ventanas</li>
              <li>Portones</li>
              <li>Barandales</li>
              <li>Escaleras</li>
              <li>Domos</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="fw-bold d-flex justify-content-left">Accesorios</h6>
            <ul className="list-footer">
              <li>Antepechos para cortina</li>
              <li>Postigos para cortina</li>
              <li>Controles para motor</li>
              <li>Chapas para puertas</li>
              <li>Placas para cortinas</li>
            </ul>
          </div>
        </div>
        <hr className="border border-light opacity-50 container-content-footer" />
        <div className="container-content-footer ">
          <div className="d-flex  justify-content-around mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-whatsapp me-4"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </div>
          <div className="mb-3">
            <img src={iconPayPal} alt="logo paypal" className="icon-card" />
            <img
              src={iconMastercard}
              alt="logo mastercard"
              className="icon-card"
            />
            <img src={iconVisa} alt="logo visa" className="icon-card" />
            <img src={iconDiscover} alt="logo discover" className="icon-card" />
          </div>
          <div className="mb-3">
            Copyright
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-c-circle me-1 ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
            </svg>
            Nueva Era by Ernest
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
