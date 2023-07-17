import React from 'react';
import NavGrp from '../components/navGp/NavGrp';
import RetourButton from '../components/retourbutton/RetourButton';
import CardDetailsGp from '../components/carddetailsgp/CardDetailsGp'


const GrpNavigation1 = () => {
  return (
    <div>
    <NavGrp />
    <RetourButton />
    <CardDetailsGp /> 
    </div>
);
};

export default GrpNavigation1;