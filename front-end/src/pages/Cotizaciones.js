// import { Link } from "react-router-dom";
import { useState } from "react";
import imgCort from "../assets/cortina3.webp";
import MyDocument from "../components/createPDF";
// import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
const Cotizaciones = () => {
  const [pdf, setPdf] = useState(false);
  const quotationData = {
    products: Array.from({ length: 15 }, (_, index) => ({
      name: `Producto ${index + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    })),
    total: 15602, // Puedes calcular el total según tus necesidades
  };
  return (
    <>
      <div className=" container-homePage mt-5 mb-5">
        <h3 className="fw-bold">Cotizaciones</h3>
        <hr className="m-0" />
        <div className="row d-flex mt-5">
          <form action="" className="col-5 row  ">
            <div className="row">
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Alto(mts)
                </label>
                <input
                  type="number"
                  id="inputPassword6"
                  className="form-control fw-bold"
                  aria-describedby="passwordHelpInline"
                  placeholder="Alto"
                  required
                />
              </div>
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Ancho(mts)
                </label>
                <input
                  type="number"
                  id="inputPassword6"
                  className="form-control fw-bold"
                  aria-describedby="passwordHelpInline"
                  placeholder="Ancho"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Tipo de Material
                </label>
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected className="fw-bold">
                    Seleccione un tipo...
                  </option>
                  <option value="1" className="fw-bold">
                    Europea
                  </option>
                  <option value="2" className="fw-bold">
                    Plana
                  </option>
                  <option value="3" className="fw-bold">
                    Pecho Paloma
                  </option>
                </select>
              </div>
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Color
                </label>
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected className="fw-bold">
                    Seleccione un color...
                  </option>
                  <option value="1" className="fw-bold">
                    Zintro
                  </option>
                  <option value="2" className="fw-bold">
                    Galvanizado
                  </option>
                  <option value="3" className="fw-bold">
                    Blanco
                  </option>
                  <option value="4" className="fw-bold">
                    Negro Mate
                  </option>
                  <option value="5" className="fw-bold">
                    Café
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Accesorios
                </label>
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected className="fw-bold">
                    Seleccione uno...
                  </option>
                  <option value="1" className="fw-bold">
                    Postigo
                  </option>
                  <option value="2" className="fw-bold">
                    Chapas
                  </option>
                  <option value="3" className="fw-bold">
                    Ante Pecho
                  </option>
                </select>
              </div>
              <div className="col-5 m-3">
                <label
                  htmlFor="inputPassword6"
                  className="col-form-label fw-bold"
                >
                  Funcionamiento
                </label>
                <select
                  className="form-select fw-bold"
                  aria-label="Default select example"
                >
                  <option selected className="fw-bold">
                    Seleccione un tipo...
                  </option>
                  <option value="1" className="fw-bold">
                    Impulso
                  </option>
                  <option value="2" className="fw-bold">
                    Mecanismo
                  </option>
                  <option value="3" className="fw-bold">
                    Motor
                  </option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-5">
              <button className="btn btn-success" onClick={() => setPdf(!pdf)}>
                Solicitar
              </button>
              <button className="btn btn-danger">Cancelar</button>
              <button className="btn btn-primary">Diseño</button>
            </div>
          </form>
          <div className="col-7">
            <img src={imgCort} alt="" style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      {pdf ? (
        <div className="container">
          <PDFViewer style={{ width: "100%", height: "500px" }}>
            <MyDocument quotationData={quotationData} />
          </PDFViewer>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cotizaciones;
