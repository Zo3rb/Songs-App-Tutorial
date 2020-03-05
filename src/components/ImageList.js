import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />
    })
    return (
        <>
            {images.length ? images : <p className="text-center">Please Enter Word to Search</p>}
        </>
    );
}

export default ImageList;
