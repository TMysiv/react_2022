import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import getPhotosById from "../../services/photos.service";
import Photo from "../Photo/Photo";

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    const {albumId} = useParams();

    useEffect(() => {
        getPhotosById(albumId).then(value => {
            setPhotos([...value])
        })
    }, [albumId])

    return (
        <div>
            <h3>Photos:</h3>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default Photos;