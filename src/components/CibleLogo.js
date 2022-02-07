import cible from '../assets/cible.png';
import './CibleLogo.css';

const CibleLogo = () => {
  return (
    <div>
      <img className='cible' src={cible} alt='logo' />
    </div>
  );
};
export default CibleLogo;
