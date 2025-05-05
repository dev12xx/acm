import React, { useState } from 'react';

function Paragraphe() {
  const [paragraphe, setParagraphe] = useState("");
  
  const copier = (e) => {
    setParagraphe(e.target.value);
  };

const reset =()=>{
    setParagraphe();
}
  return (
    <div>
      <input 
        type="text" 
        name="paragraphe"
        placeholder='faites entre un paragraphe'
       onDoubleClick={copier}
        
      />
      <p>vous avier saisier:{paragraphe}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Paragraphe;