import React, {useEffect, useState} from 'react';

import Dog from "../Dog/Dog";


const Dogs = () => {

    const [dogs, setDogs] = useState([]);

   useEffect(()=>{
      setDogs(JSON.parse(localStorage.getItem('dogs')))
   },[])
    
    // const deleteDogs = (dog) => {
    //     const index = dogs.indexOf(dog)
    //     dogs.splice(index,1)
    //     localStorage.setItem('dogs',JSON.stringify('dogs'))
    // }
    return (
        <div>
            {dogs.map(dog => <Dog  dog={dog} />)}
        </div>
    );
}
export default Dogs;