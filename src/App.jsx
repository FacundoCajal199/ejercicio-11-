import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import "./App.css";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
function App() {
  const [noticias, setNoticias] = useState({});
  

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //peticion GET envolver
      const respuesta = await fetch(
        "https://newsapi.org/v2/todo? q=apple & from=2023-06-07 & to=2023-06-07 & sortBy=popularidad &apiKey=72f84f7c14754936a842fd3856e7d76a"
      );
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato);
      setNoticias(dato);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="text-center">
        <h1>Noticias</h1>
        <hr />
      <Formulario ></Formulario>

      </Container>
    </>
  );
}

export default App;
