import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
    return (
        <div className="container-fluid">
            {/* Starting The Greeting Component Here */}
            <div className="row py-3">
                <div className="container-fluid">
                    <div className="sm-12 text-center text-primary">
                        <h1>Songs Tutorial APP (React + Redux)</h1>
                        <p className="text-muted my-0">Bootstrap 4 For Responsive / Bootstrap 4 iFrame Not API for Videos</p>
                        <p className="text-muted my-0">Replaced The Videos For Religious Beliefs</p>
                    </div>
                </div>
            </div>
            {/* Ending The Greeting Component Here */}
            {/* Starting New Row to Wrap (SongList and The Song Details components) */}
            <div className="row py-3">
                <SongList />
                <SongDetails />
            </div>
            {/* Ending New Row to Wrap (SongList and The Song Details components) */}
        </div>
    );
}

export default App;
