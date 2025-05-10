import { useState } from "react";
function Paragraphe2(){
const [paragraphe2,setparagraphe2]=useState(
    {
        couleur:"black",
        taille:"16px",
        police:'Arialb',
    }
)
    const changer1=()=>{
    setparagraphe2(prev =>({...prev,couleur:"red",
        taille:"20 px"
    }
))};
    const quitter = () => {
        setparagraphe2(prev =>({...prev,
            couleur: "black",
            taille:"16px"
        }
        ));
    }
return(
    <div>
        <p style={{color:paragraphe2.couleur,fontSize:paragraphe2.taille,
        fontFamily:paragraphe2.police}}
        onMouseEnter={changer1}
        onMouseLeave={quitter}>je change ma couleur et mon taille</p>
    </div>
)
}
export default Paragraphe2;