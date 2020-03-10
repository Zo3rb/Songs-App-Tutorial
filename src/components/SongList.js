import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from './Song';
import { selectSong } from '../actions';

class SongList extends Component {
    render() {
        const singleSong = this.props.songs.map(song => {
            return <Song key={song.title} song={song} selectSong={this.props.selectSong} />
        })
        return (
            <>
                <div className="col-md-5 offset-md-1 col-sm-12 mt-3 order-sm-2 order-md-1">
                    {singleSong}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { selectSong })(SongList);