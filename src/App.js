import React, { Component } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: ''
  }

  onSearchSubmit = async term => {
    //For Some Reason The API Request didn't Accepted While The Key was in The API File
    const API_KEY = 'AIzaSyDtxGYZq7-aGEWZNQ5KAawsaEVj7LThEM8'
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        q: term
      }
    })
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: this.state.videos[0].id.videoId })
  }

  onClickVideo = videoId => {
    this.setState({ selectedVideo: videoId })
  }

  componentDidMount() {
    this.onSearchSubmit('Learn React');
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Starting Greeting */}
        <div className="row">
          <div className="col-sm-12 p-5 text-center">
            <h1 className="text-primary">New React Tutorial App</h1>
            <p className="mb-3">Using Youtube Api (Searching Videos) & Bootstrap v4 CSS</p>
          </div>
        </div>
        {/* Ending Greeting */}

        {/* Starting SearchBar Component Here */}
        <div className="row p-3">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
        </div>
        {/* Ending SearchBar Component Here */}

        {/* Starting The Video List & Selected Video Component Here */}
        <div className="row p-3">
          <div className="col-md-7 col-sm-12">
            <VideoDetails
              selectedVideo={this.state.selectedVideo}
            />
          </div>
          <div className="col-md-5 cold-sm-12">
            <VideoList
              videos={this.state.videos}
              onClickVideo={this.onClickVideo}
            />
          </div>
        </div>
        {/* Ending The Video List & Selected Video Component Here */}
      </div>
    );
  }
}

export default App;