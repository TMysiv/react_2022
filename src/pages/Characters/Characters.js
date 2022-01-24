import React, {useEffect, useState} from 'react';

import apiServise from "../../services/character.service";
import SingleCharacter from "../SingleCharacter/SingleCharacter";

const Characters = ({url}) => {
    const [character, setCharactet] = useState(null);

    useEffect(() => {
        apiServise.getCharacter(url).then(value => setCharactet(value)
        )
    }, [])

    return (
        <div>
            {character && <SingleCharacter character={character}/>}
        </div>
    );
};

export default Characters;