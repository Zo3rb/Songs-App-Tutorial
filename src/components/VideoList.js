import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onClickVideo }) => {
    return (
        <div>
            <p className="text-center"><span className="text-success">Searched Videos: </span>Click to Embed</p>
            <p className="text-muted text-center">Learn React is the Default Search</p>
            {
                videos.map(video => {
                    return <VideoItem key={video.id.videoId + 5} video={video} onClickVideo={onClickVideo} />
                })
            }
        </div>
    );
}

export default VideoList;
