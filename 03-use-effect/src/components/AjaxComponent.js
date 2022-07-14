import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  const getUsuariosEstaditicos = () => {
    setUsuarios([
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
      },
    ]);
  };

  const getUsuariosAjaxPas = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAW = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();

        setUsuarios(data);
        setCargando(false);
      } catch(error) {
        console.log(error);
        setErrores(error.message)
      }
    }, 4000);
  };

  useEffect(() => {
    // getUsuariosEstaditicos();
    // getUsuariosAjaxPas();

    getUsuariosAjaxAW();
  }, []);

  if(errores !== ""){
    // Cuando esta cargando
    return <div className="error">{errores}</div>;
  }
  else if (cargando == true) {
    // Cuando esta cargando
    return <div className="cargando">Cargando datos....</div>;
  } else if (cargando == false && errores === "") {
    // Cuando todo va bien
    return (
      <div>
        <h2>Listado de usuarios con Ajax</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            console.log(usuario);
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width="30" />
                &nbsp;
                {usuario.email} {usuario.first_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
