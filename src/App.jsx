import './App.css';
import Titre from './component/Titre';
import Titre1 from './component/Titre1';
import Compteur from './component/compteur';
import Text from './component/Text';
import Ph from './component/Ph';   

import Calculatrice from "./component/Calculatrice";
import Message from "./component/Message";

import Message2 from "./component/Message2";
import Paragraphe2 from "./component/Paragraphe2";
import Produit from "./component/Produit";
import Evenment from "./component/Evenment";
import Animal from "./component/Tableau";
import Phh from "./component/Phh";
import Formulaire from './component/Formulaire';
import Paragraphe from './component/paragraphe';
import User from './component/User';

function App() {  
    const animal=["chien","chat","lapin"]
     return (
       <div>
         <Titre1/>
         <Titre/>
         <Compteur/>
         <Text/>
         <Ph/>   
         <Formulaire/>   
         <Calculatrice/>
        <Message/>         
        <Paragraphe/>
        <User/>
        <Paragraphe2/>
        <Message2 nom=" ahmed"/>
        <Message2 nom=" mohamed"/>
  <Produit mystyle={{ color: 'green',fontSize:'50px'}}
   pri={{color:'blue'}} informastions ={{nom:"sucre",prix:100.45,}}
  will={{color:'red'}} informastion={{wilaya:"constantine"}}/>

       
        <Animal animaux={animal}/>
        <Evenment click={()=>alert("bien")}/>
        <Evenment click={()=>alert("hhhh")}/>
        <Evenment click={()=>alert("noooo")}/>
          <Phh/>
</div>            
     )
   }
export default App;