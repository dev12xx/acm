import React from 'react'

function Animal({animaux}) {
  return (
    <div>
<h1>liste de animal </h1>
<ul>
    {animaux.map((item,index)=>(<li key={index}>{item}</li>))}
</ul>

    </div>
  )
}

export default Animal