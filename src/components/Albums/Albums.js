import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import getAlbumsById from "../../services/albums.service";
import Album from "../Album/Album";

const Albums = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbumsById(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
}

export default Albums;