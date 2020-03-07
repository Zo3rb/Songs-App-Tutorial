import React from 'react';

const VideoDetails = ({ selectedVideo }) => {
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title={selectedVideo}
                    allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
}

export default VideoDetails;
