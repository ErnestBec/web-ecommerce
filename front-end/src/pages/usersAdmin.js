// import "../styles/usersAdmin.css";
import { Link } from "react-router-dom";
const UsersAdmin = () => {
  const usuarios = [
    {
      id: 1,
      nombre: "Ernesto",
      apellido: "Becerril",
      genero: "Masculino",
      fechaNacimiento: "2001-01-01",
      calle: "Principal 123",
      entidad: "Toluca",
      municipio: "San Pablo",
      cp: "50200",
      rol: "Administrador",
      estatus: "Activo",
    },
    // Puedes agregar más usuarios según sea necesario
  ];

  const openRegistroUsuariosModal = () => {
    // Implementa la lógica para abrir el modal de registro de usuarios
    console.log(
      "Implementa la lógica para abrir el modal de registro de usuarios"
    );
  };

  return (
    <main className="container-full-users">
      <header>
        <h2>Registro de usuarios en el sistema</h2>
      </header>
      <hr />
      <div className="usuarios-container d-felx">
        <div className="d-flex justify-content-evenly" style={{ width: "%80" }}>
          <label htmlFor="search" className="fw-bold">
            Buscar usuarios:
          </label>
          <input
            type="text"
            id="exampleFormControlInput6"
            className="form-control fw-bold"
            placeholder="Name User"
            aria-describedby="passwordHelpInline"
            required
          />
          <Link
            to="#"
            className="btn btn-success fw-bold"
            onClick={openRegistroUsuariosModal}
          >
            Nuevo
          </Link>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Género</th>
              <th>Fecha de Nacimiento</th>
              <th>Calle</th>
              <th>Entidad</th>
              <th>Municipio</th>
              <th>CP</th>
              <th>Rol</th>
              <th>Estatus</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <>
                <tr key={usuario.id}>
                  <td className="fw-bold">{usuario.id}</td>
                  <td className="fw-bold">{usuario.nombre}</td>
                  <td className="fw-bold">{usuario.apellido}</td>
                  <td className="fw-bold">{usuario.genero}</td>
                  <td className="fw-bold">{usuario.fechaNacimiento}</td>
                  <td className="fw-bold">{usuario.calle}</td>
                  <td className="fw-bold">{usuario.entidad}</td>
                  <td className="fw-bold">{usuario.municipio}</td>
                  <td className="fw-bold">{usuario.cp}</td>
                  <td className="fw-bold">{usuario.rol}</td>
                  <td className="fw-bold">{usuario.estatus}</td>
                  <td>
                    <button className="btn btn-danger m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </button>

                    <button className="btn btn-success m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </button>
                    <button className="btn btn-warning m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-ban"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default UsersAdmin;
