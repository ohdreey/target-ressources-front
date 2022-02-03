import styled from "styled-components";

import Form from "./Form";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(13, 37, 56, 0.7);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  z-index: 10;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    padding: 18px 10px;
    color: #fff;
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Gérer mes ressources</li>
      <Form />
    </Ul>
  );
};

export default RightNav;
