import React, { useState } from 'react';
import './ShowAp.css';
import { useNavigate } from 'react-router-dom';
import nom from '../../assets/nom.svg';
import st from '../../assets/student.svg';
import user from '../../assets/2 User.png';
import SelectStudent from '../selectstudent/SelectStudent';
import DeclareAp from '../declareap/DeclareAp';

const ShowAp = () => {
  const navigate = useNavigate();
  const [isDeclareApPopupOpen, setIsDeclareApPopupOpen] = useState(false);
  const [selectStudent, setSelectStudent] = useState(false);
  const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleCloseShowAp = () => {
    setIsAnyPopupOpen(false);
    setIsDeclareApPopupOpen(false);
    setSearchText(''); 
  };

  const handleOpenDeclareAp = () => {
    setIsDeclareApPopupOpen(true);
    setSelectStudent(false);
  };
  const handleCloseDeclareAp = () => {
    setIsAnyPopupOpen(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };



  const handleOverlayClick = (e) => {
    const isOverlay = e.target.id === 'showApModal' || e.target.classList.contains('A-button');
    if (isOverlay) {
      setSelectStudent(false);
      setIsAnyPopupOpen(false);
    }
  };

  const data = [
    { id: 1, title: "Sciences islamiques 1ère année", schedule: "Jeu 18h00 à 12h00" },
    { id: 2, title: "Sciences islamiques 2éme année", schedule: "Lun 14h00 à 18h00" },
    { id: 3, title: "Sciences islamiques 3éme année", schedule: "Lun 14h00 à 18h00" },
    { id: 4, title: "Sciences islamiques 4éme année", schedule: "Lun 14h00 à 18h00" },
  ];
  return (
    <div>
      {(!selectStudent && isAnyPopupOpen) && (
        <div className="mod-desktop" onClick={handleOverlayClick}>
          <h2> Déclarer une AP </h2>
          <div className="blok-sc">
            <div className="nom-row">
              <img src={nom} alt='' />
              <h3>Rechercher par nom :</h3>
            </div>
            <div className="nom-input">
              <input type="text" placeholder="Saisir un nom d’étudiant" value={searchText} onChange={handleSearchInputChange} />
              <button className="custom-button" onClick={handleOpenDeclareAp}>
                <img src={st} alt='' />
              </button>
            </div>
          </div>
          <div className="blok-g">
            <div className="ap-line">
              <img src={user} alt='' />
              <h3>Rechercher par groupe :</h3>
            </div>
            <div className="gru-cont">
              {data.map((item) => (
                <div className="gr-c" key={item.id} onClick={() => setSelectStudent(true)}>
                  <h3>{item.title}</h3>
                  <div>
                    <p className='jr'>{item.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="c-button" onClick={handleCloseShowAp}>Annuler</button>
        </div>
        
      )}
      {selectStudent && <SelectStudent onCancel={handleOpenDeclareAp} />}

    </div>
  );
};

export default ShowAp;
