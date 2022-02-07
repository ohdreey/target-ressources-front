import axios from 'axios';
import '../App.css';

const PopupInfo = (props) => {
  console.log(props);

  const deleteElem = () => {
    axios.delete('http://localhost:4242/ressources/delete', {
      data: { id: props.id },
    });
    props.setPopupOn(false);
    getEditRessource();
  };

  const getEditRessource = () => {
    props.setEditRessource(!props.editRessource);
  };

  return (
    <div className={!props.popupOn && 'popupOff'}>
      <div>
        <div onClick={() => props.setPopupOn(false)}>
          <p> X </p>
        </div>
        <div>
          <div>{props.indicationElement}</div>
          <button onClick={() => deleteElem()}>Supprimer ressource</button>
        </div>
      </div>
    </div>
  );
};

export default PopupInfo;
