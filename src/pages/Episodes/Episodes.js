import React, {useEffect, useState} from 'react';

import css from './episodes.css'
import apiServise from "../../services/episode.service";
import Episode from "../Episode/Episode";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        apiServise.getEpisodes(page).then(value =>{
            setEpisodes(value.results)})
    }, [page])

    const nextPage = (page) => {
        if (page <= 3) {
            setPage(++page)
            return
        }
    }
    const previousPage = (page) => {
        if (page >1){
            setPage(--page)
            return
        }
    }

    return (
        <>
            <div className={'header_episodes'}>
                <h1>Rick and Morty Episodes</h1>
            </div>
            <div className={'wrap_episode'}>
                {episodes.map(episode => <Episode key={episode.id} episodes={episode}/>)}
            </div>
            <div className={'button_episodes'}>
                <button onClick={() => {
                    previousPage(page)
                }}>previous
                </button>
                <button onClick={() => {
                    nextPage(page)
                }}>next
                </button>
            </div>
        </>
    );
};

export default Episodes;