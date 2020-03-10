// Action Creators exported One By One
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
