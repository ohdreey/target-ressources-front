import Burger from "./components/Burger";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import carte from "./assets/carte.png";
import "./App.css";

const App = () => {
  const [ressource, setRessource] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4242/ressources/read").then((response) => {
      setRessource(response.data);
    });
  }, []);
  console.log(ressource);

  return (
    <div className='body'>
      <Burger />
      <div className='contenerCarte'>
        {/* <div className='transparente'></div> */}
        <img className='carte' src={carte} alt='carte' />
      </div>
      {/* <div>
        {ressource.map((picto) => (
          <p> {picto.type} </p>
        ))}
      </div> */}
    </div>
  );
};

export default App;
