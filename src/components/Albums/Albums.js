import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import getAlbumsById from "../../services/albums.service";

const Albums = () => {

    const {state} = useLocation();

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        getAlbumsById(state.id).then(value => setAlbums(value))
    },[state.id])

    return (
        <div>
            {albums.map(album => album.userId)}
        </div>
    );
};

export default Albums;