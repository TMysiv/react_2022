import React from 'react';
import {useLocation} from "react-router-dom";
import Characters from "../Characters/Characters";

import css from './detailsEpisode.css'

const DetailsEpisode = () => {

    const {state} = useLocation();
    const character = state.characters

    return (
        <>
            <div className={'header_details'}>
                <h1>{state.name}</h1>
            </div>
            <div className={'wrap_character'}>
                {character.map(value => <Characters key={value.id} url={value}/>)}
            </div>
        </>
    );
};

export default DetailsEpisode;