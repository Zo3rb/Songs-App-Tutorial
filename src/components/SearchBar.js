import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            value={this.state.term}
                            placeholder="Search Videos .."
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;