import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";

function StructureBinaire() {
  return (
    <div className="page" style={{maxHeight: '100vh'}}>
      <div className="full-row" style={{height:'100px'}}>
        {/* Contenu de la ligne entière */}
        <p>Contenu de la ligne entière</p>
      </div>
      <div className="three-columns" style={{display: 'flex', padding: '10px', maxHeight: '50vh' }}>
        <div className="column" style={{ flexBasis: '25%', margin:'10px', border: '2px solid red'}}>
          {/* Contenu de la colonne 1 */}
          <p>Colonne 1</p>
        </div>
        <div className="column" style={{ flexBasis: '25%', margin:'10px',  border: '2px solid red' }}>
          {/* Contenu de la colonne 2 */}
          <p>Colonne 2</p>
        </div>
        <div className="column" style={{ flexBasis: '50%', margin:'10px', border: '2px solid red' }}>
          {/* Contenu de la colonne 3 */}
          <p>Colonne 3</p>
        </div>
      </div>
    </div>
  );

}

export default StructureBinaire;
