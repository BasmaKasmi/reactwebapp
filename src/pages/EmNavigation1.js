import React from 'react';
import CardDetails from '../components/carddetails/CardDetails';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';

const EmNavigation1 = () => {
  return (
    <div>
    <NavEmarg />
    <RetourButton />
    <CardDetails />
    </div>
);
};

export default EmNavigation1;