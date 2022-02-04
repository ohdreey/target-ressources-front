import styled from "styled-components";

import Form from "./Form";
import CibleLogo from "../components/CibleLogo";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(13, 37, 56, 0.7);
  box-shadow: 1px 1px 10px #9EE1AA;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  margin: 0; 
  height: 100vh;
  width: 300px;
  z-index: 10;
  // padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    padding: 18px 10px;
    color: #fff;
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <CibleLogo />

      <li className='GmR'>Gérer mes ressources</li>
      <Form />
    </Ul>
  );
};

export default RightNav;
