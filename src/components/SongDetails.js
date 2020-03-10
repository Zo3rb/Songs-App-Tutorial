import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if (!props.mySong) {
        return (
            <div className="col-md-5 mt-md-5 offset-md-1 col-sm-12 order-sm-1 order-md-2">
                <h5 className="mt-md-5">Please!! .. Select a Song to See The Full Details</h5>
            </div>
        )
    }
    return (
        <div className="col-md-5 col-sm-12 order-sm-1 order-md-2 text-center">
            <div className="details">
                <ul className="list-unstyled">
                    <li><h5 className="text-primary">
                        Song: {props.mySong.title}
                    </h5></li>
                    <li>Duration: {props.mySong.duration}</li>
                    <li>Singer/Band: {props.mySong.band}</li>
                    <li>Released Year: {props.mySong.year}</li>
                    <li> &darr; </li>
                </ul>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src={`https://www.youtube.com/embed/${props.mySong.embed}`} allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mySong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);
