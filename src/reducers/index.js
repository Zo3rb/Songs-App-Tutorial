import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:10', year: '1999', band: 'Girl Group Band', embed: '-6XhLckQzZ8' },
        { title: 'Macarena', duration: '3:51', year: '1996', band: 'Los del Río', embed: 'I_qTX1KQgKI' },
        { title: 'All Star', duration: '3:57', year: '2001', band: 'Smash Mouth', embed: 'M3xjz4nxzGQ' },
        { title: 'I Want it That Way', duration: '3:39', year: '1999', band: 'Back Street Boys', embed: 'Vqfy4ScRXFQ' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
