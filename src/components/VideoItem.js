import React from 'react';

const VideoItem = (props) => {
    return (
        <>
            <div
                className="card p-1 my-2 bg-dark text-white"
                onClick={() => props.onClickVideo(props.video.id.videoId)}
                style={{ cursor: 'pointer' }}>
                <img className="card-img-top"
                    alt={props.video.snippet.title}
                    src={props.video.snippet.thumbnails.medium.url}
                />
                <div className="card-body">
                    <h6 className="font-weight-bold text-info">{props.video.snippet.title}</h6>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        </>
    );
}

export default VideoItem;
