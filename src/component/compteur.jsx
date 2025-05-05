import React, { useState } from 'react';
function Compteur() {
  const [compteur, setCompteur] = useState(50);
  const incrementer = () => {
    // setCompteur(compteur + 10);
    setCompteur(compteur => compteur+10 );

  };
  const reset=()=>{
    setCompteur(0);
  };
  return (
    <div>
      <p> compter {compteur}</p>
      <button onClick={incrementer}>incrementer</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default Compteur;