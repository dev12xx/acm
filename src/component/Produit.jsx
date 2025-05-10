import React from 'react'

function Produit({informastions,informastion,mystyle,pri,will}) {
  return (
    <div>
<h2 style={mystyle}> desinasion prod:{informastions.nom}</h2>
<h2 style={pri}>prix de prod:{informastions.prix}</h2>
<h2 style={will}>wilaya:{informastion.wilaya}</h2>

    </div>
  )
}

export default Produit