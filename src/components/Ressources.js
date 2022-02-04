import styled from "styled-components";
import carte from "../assets/carte.png";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledRessources = styled.div`
  .contenerCarte {
    /* display: flex; */
    position: relative;
    width: 100%;
    height: 100%;
    /* justify-content: center;  */

    .picto {
      position: absolute;
      top: ${({ x }) => console.log(x+"px") || x+"px" };
      left: ${({ y }) =>  console.log(y+"px") || y+"px"};
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
  const [posX, setPosX] = useState()
  const [posY, setPosY] = useState()

  useEffect(() => {
    axios.get("http://localhost:4242/ressources/read").then((response) => {
      // console.log('pouelt01 : ', response)
      setRessource(response.data);
    });
  }, [])


  console.log(ressource, posX, posY);
  
  return (
    <>
      {ressource.map(elem => {
        return (
          <StyledRessources x={elem.x} y={elem.y}>
            <div className='contenerCarte'>
              <div className='picto'>{ elem.type}</div>
            </div>
          </StyledRessources>
        )
    })}
      <StyledImage>
        <img className='imageCard'src={carte} alt='carte' />
      </StyledImage>
  </>)
}

export default Ressources