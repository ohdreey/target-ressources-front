import Burger from "./components/Burger";
import Ressources from "./components/Ressources";
import { Route, Routes } from "react-router-dom";



import carte from "./assets/carte.png";
import "./App.css";

const App = () => {


    return (
    <div className='body'>
      <Burger />
      {/* <div className='contenerCarte'>
        <img className='carte' src={carte} alt='carte' />
      </div> */}
      <Ressources />
      {/* <div>
        {ressource.map((picto) => (
          <p> {picto.type} </p>
        ))}
      </div> */}
      </div>
  );
};

export default App;
