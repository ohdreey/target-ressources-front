import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PopupInfo from './PopupInfo';
import '../App.css';

import carte from '../assets/carte.png';
import bois from '../assets/bois.png';
import baies from '../assets/baies.png';
import campement from '../assets/campement.png';
import goutte from '../assets/goutte.png';
import pierre from '../assets/pierre.png';
import poisson from '../assets/poisson.png';
import newres from '../assets/newres.png';

const StyledRessources = styled.div`
  .contenerCarte {
    /* display: flex; */
    position: relative;
    width: 100%;
    height: 100%;
    /* justify-content: center;  */
    .picto {
      position: absolute;
      top: ${({ x }) => console.log(x + 'px') || x + 'px'};
      left: ${({ y }) => console.log(y + 'px') || y + 'px'};
    }
  }
`;
const StyledImage = styled.div`
  .imageCard {
    width: 768px;
    height: 1024px;
  }
`;
const Ressources = () => {
  const [ressource, setRessource] = useState([]);
  const [editRessource, setEditRessource] = useState(false);
  const [popupOn, setPopupOn] = useState(false);
  const [idElem, setIdElem] = useState();
  const [indicationElement, setIndicationElem] = useState();

  useEffect(() => {
    axios.get('http://localhost:4242/ressources/read').then((response) => {
      // console.log('pouelt01 : ', response);
      setRessource(response.data);
    });
  }, [editRessource]);

  const afficherPopup = (id, indication) => {
    setPopupOn(true);
    setIdElem(id);
    setIndicationElem(indication);
  };

  console.log(ressource);

  return (
    <>
      <div className={popupOn ? 'popupInfo' : 'popupOff'}>
        <PopupInfo
          id={idElem}
          editRessource={editRessource}
          setEditRessource={setEditRessource}
          indicationElement={indicationElement}
          setPopupOn={setPopupOn}
          popupOn={popupOn}
        />
      </div>
      {console.log('Deologie :', ressource)}
      {ressource.map((elem) => {
        {
          switch (elem.type) {
            case 'bois':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  <div className='contenerCarte'>
                    {console.log(elem.type, bois)}
                    <div className='picto'>
                      <img
                        src={bois}
                        alt='bois'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            case 'baies':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  {console.log(elem.type)}
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={baies}
                        alt='baies'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            case 'campement':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  {console.log(elem.type, campement)}
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={campement}
                        alt='campement'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            case 'goutte':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={goutte}
                        alt='goutte'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            case 'pierre':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={pierre}
                        alt='pierre'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            case 'poisson':
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  {console.log(elem.type, elem.id)}
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={poisson}
                        alt='poisson'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
            default:
              return (
                <StyledRessources x={elem.x} y={elem.y}>
                  <div className='contenerCarte'>
                    <div className='picto'>
                      <img
                        src={newres}
                        alt='new'
                        onClick={() => afficherPopup(elem.id, elem.indications)}
                      />
                    </div>
                  </div>
                </StyledRessources>
              );
          }
        }
      })}
      {/* <img src={newres} alt='new' /> */}
      <StyledImage>
        <img className='imageCard' src={carte} alt='carte' />
      </StyledImage>
    </>
  );
};

export default Ressources;
