import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onSubmitForm = e => {
        e.preventDefault();
        this.props.onSubmitSearch(this.state.term)
    }

    render() {
        return (
            <div className="row p-3">
                <div className="col-sm-10 offset-sm-1">
                    <form onSubmit={this.onSubmitForm}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Search..."
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;