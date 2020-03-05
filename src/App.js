import React, { Component } from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';


class App extends Component {
  state = {
    images: []
  }

  onSubmitSearch = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="container-fluid">
        {/* Start Greeting  */}
        <div className="row">
          <div className="col-sm-12 p-3">
            <h1 className="text-center mt-5">Search Application Tutorial</h1>
            <p className="text-center text-primary">Using Unsplash API</p>
          </div>
        </div>
        {/* End Greeting */}
        {/* Starting Search Bar */}
        <SearchBar onSubmitSearch={this.onSubmitSearch} />
        {/* Ending Search Bar */}
        {/* Starting The Image List */}
        <ImageList images={this.state.images} />
        {/* ending The Image List */}
      </div>
    );
  }
}

export default App;