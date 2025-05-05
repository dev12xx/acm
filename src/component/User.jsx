import React from 'react';

import { useState } from 'react';

function User() {
    const [user, setuser] = useState({
        nom: "xxx",
        prenom: "xxx",
        age: 20
    });

    const changer = (e) => {
        const { name, value } = e.target;
        setuser({...user, [name]: value});
    };
    
    return (
        <div>
        <input type="text" name="nom" onChange={changer}/>
        <input type="text" name="prenom" onChange={changer}/>
        <input type="text" name="age" onChange={changer}/>
        <p>user est :{user.nom},{user.prenom},{user.age}</p>
        
        </div>
    );
}

export default User;