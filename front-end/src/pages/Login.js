import { Link } from "react-router-dom";
import "../styles/Login.css";
import FooterBottom from "../components/footer_bottom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        {
          email: username,
          password: password,
        }
      );

      if (response.status === 201) {
        login(response.data.token, response.data.role);

        // Redirigir a otra página (puedes usar React Router para esto)
        navigate("/");
      } else {
        // En caso de error en la autenticación
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      setError("Error al procesar la solicitud");
    }
  };
  return (
    <>
      <main className=" mt-3 mb-5 justify-content-start">
        <p className="fw-bold d-flex justify-content-start">
          Home/Iniciar sesión
        </p>
        <h4 className="fw-bold d-flex justify-content-start mt-3 mb-5">
          Bienvenido de nuevo!
        </h4>
        <div className="d-flex flex-row  mb-5 justify-content-center">
          <div>
            <form onSubmit={handleLogin}>
              {error && (
                <p className="fw-bold text-danger">
                  Credenciales invalidas! {error}
                </p>
              )}
              <div className="container-login d-flex flex-column pe-5 ps-5">
                <div className="mt-2 mb-4">
                  <label
                    htmlFor="exampleFormControlInput6"
                    className="form-label fw-bold d-flex justify-content-start"
                  >
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    id="exampleFormControlInput6"
                    className="form-control fw-bold"
                    placeholder="Correo electronico"
                    aria-describedby="passwordHelpInline"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="inputPassword6"
                    className="form-label fw-bold d-flex justify-content-start"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="inputPassword6"
                    className="form-control fw-bold"
                    placeholder="Contraseña"
                    aria-describedby="passwordHelpInline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className=" d-flex align-items-center justify-content-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn_login me-4"
                >
                  Iniciar sesion
                </button>
                <Link to="" className="fw-bold">
                  Olvidate tu contraseña?
                </Link>
              </div>
            </form>
          </div>
          <div className="container-createaccount d-flex flex-column justify-content-center">
            <h4 className="fw-bold ">¿Nuevo Usuario?</h4>
            <h5 className="fw-bold mb-4">
              Disfruta de estos y más beneficios.
            </h5>
            <ul className="list-ben ">
              <li className="fw-bold">~Descuentos frecuentes</li>
              <li className="fw-bold">~Atencion Personalizada</li>
              <li className="fw-bold">~Lasrgas filas de espera</li>
              <li className="fw-bold">~Bajo costo en servicios</li>
            </ul>
            <div className="d-flex justify-content-center align-center">
              <button type="button" className="btn btn-primary btn_login">
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
        <FooterBottom />
      </main>
    </>
  );
};

export default Login;
