import React, {useEffect, useState} from 'react';

import Dog from "../Dog/Dog";


const Dogs = () => {

    const [dogs, setDogs] = useState([]);

   useEffect(()=>{
      setDogs(JSON.parse(localStorage.getItem('dog')))
   },[])

    return (
        <div>
            {dogs.map(dog => <Dog  dog={dog}/>)}
        </div>
    );
}
export default Dogs;