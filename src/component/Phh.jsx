import React from 'react';
import ff from '../assets/ff.png'; 
function Phh() {
   const monstyle = {
      color: 'blue',
      fontSize: '50px',
      textShadow: '1px 1px red',
   };
    
  return (
   <div>
      <p style={monstyle}>bounjour</p>
      <img src={ff} alt='description' />
      <img 
  src="https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" 
  alt="BMW M Series" 
  width="300" 
  height="200" 
/>
   </div>
  );
}

export default Phh;