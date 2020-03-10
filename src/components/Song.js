import React from 'react';

const Song = (props) => {
    return (
        <div className="card mb-3">
            <div className="card-header bg-primary text-white">
                <h5>{props.song.title}</h5>
            </div>
            <div className="card-body d-flex justify-content-between bg-dark text-white">
                <div>
                    <p>Duration: <span className="text-warning">{props.song.duration}</span></p>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.selectSong(props.song)}
                    >
                        Select
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Song;
