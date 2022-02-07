import styled from 'styled-components';

import Form from './Form';
import CibleLogo from '../components/CibleLogo';

const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: column nowrap;
  background-color: rgba(13, 37, 56, 0.7);
  box-shadow: 1px 1px 10px #9ee1aa;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  margin: 0;
  height: 400px;
  width: 350px;
  padding: 0 20px 20px 20px;
  z-index: 10;
  // padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  // li {
  //   padding: 18px 10px;
  //   color: #fff;
  // }
  .top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-top: 7px;
    align-items: center;
    padding-bottom: 20px;
  }
  .titre {
    padding: 0 30px 0 5px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className='top'>
        <CibleLogo /> <p className='titre'> Gérer mes ressources </p>
      </div>

      <Form />
    </Ul>
  );
};

export default RightNav;
