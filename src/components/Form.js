import baies from "../assets/baies.png";
import bois from "../assets/bois.png";
import campement from "../assets/campement.png";
import goutte from "../assets/goutte.png";
import pierre from "../assets/pierre.png";
import poisson from "../assets/poisson.png";
import { useState } from "react";
import "./Form.css";
import axios from "axios";
import "../components/CibleLogo.css";

const Form = () => {
  const [choixRessource, setChoixRessource] = useState();
  const [positionX, setPositionX] = useState();
  const [positionY, setPositionY] = useState();
  const [description, setDescription] = useState();

  const [ressourceOn, setRessourceOn] = useState(true);
  const [positionOn, setPositionOn] = useState(false);
  const [descriptionOn, setDescriptionOn] = useState(false);

  const divRessource = (ressource) => {
    setChoixRessource(ressource);
    setRessourceOn(false);
    setPositionOn(true);
  };

  const divPosition = () => {
    setPositionOn(false);
    setDescriptionOn(true);
  };

  const divDescription = () => {
    axios.post("http://localhost:4242/ressources/add", {
      type: choixRessource,
      x: positionX,
      y: positionY,
      indications: description,
    });
    setDescriptionOn(false);
    setRessourceOn(true);
    setChoixRessource("");
    setPositionX("");
    setPositionY("");
    setDescription("");
  };

  // console.log(choixRessource, positionX, positionY, description);

  return (
    <div className='temp'>
      <div className='cibleLogo'></div>
      <div className='globalForm'>
        <div className={ressourceOn ? "ressourcesChoix" : "formOff"}>
          <div className='bois'>
            <img
              className='boisImg'
              src={bois}
              alt='bois'
              onClick={() => divRessource("bois")}
            />
          </div>
          <div className='baies'>
            <img
              className='baiesImg'
              src={baies}
              alt='baies'
              onClick={() => divRessource("baies")}
            />
          </div>
          <div className='campement'>
            <img
              className='campementImg'
              src={campement}
              alt='campement'
              onClick={() => divRessource("campement")}
            />
          </div>
          <div className='goutte'>
            <img
              className='goutteImg'
              src={goutte}
              alt='goutte'
              onClick={() => divRessource("goutte")}
            />
          </div>
          <div className='poisson'>
            <img
              className='poissonImg'
              src={poisson}
              alt='poisson'
              onClick={() => divRessource("poisson")}
            />
          </div>
          <div className='pierre'>
            <img
              className='pierreImg'
              src={pierre}
              alt='pierre'
              onClick={() => divRessource("pierre")}
            />
          </div>
        </div>
        <form
          action=''
          method='post'
          className={positionOn ? "positionChoix form" : "formOff"}
        >
          <div>
            <div className='positionOEForm'>
              <label for='Position'>
                Entrer le nombre de pas de l'Ouest à l'Est :
              </label>
              <input
                className='inputText'
                type='number'
                name='position'
                onChange={(e) => setPositionX(e.target.value)}
              ></input>
            </div>
            <div className='positionNSForm'>
              <label for='Position'>
                Entrer le nombre de pas du Nord au Sud :
              </label>
              <input
                className='inputText'
                type='number'
                name='position'
                onChange={(e) => setPositionY(e.target.value)}
              ></input>
            </div>
            <button
              className='btnAddPositions'
              type='button'
              onClick={() => divPosition()}
            >
              Valider ma position
            </button>
          </div>
        </form>
        <form className={descriptionOn ? "descriptionForm" : "formOff"}>
          <div>
            <label for='Description'>Description de la ressource :</label>
            <input
              className='inputText'
              type='text'
              name='description'
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <br />
          <div className='btnForm'>
            <button
              className='btnAddRessource'
              type='submit'
              onClick={() => divDescription()}
            >
              Ajouter une ressource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
