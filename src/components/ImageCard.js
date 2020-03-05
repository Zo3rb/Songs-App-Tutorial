import React from 'react';

const ImageCard = (props) => {
    const { description, urls } = props.image
    return (
        <div className="row">
            <div className="col-sm-12">
                <div>
                    <img
                        src={urls.regular}
                        alt={description}
                        className="text-center d-block mb-2 mx-auto img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default ImageCard;
