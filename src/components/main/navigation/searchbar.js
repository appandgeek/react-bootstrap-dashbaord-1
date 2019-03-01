import React, { Component } from 'react';

class Searchbar extends Component {

    render() {

        return (
            <div className="search-form d-none d-lg-inline-block">
                <div className="input-group">
                    <button type="button" name="search" id="search-btn" className="btn btn-flat">
                        <i className="mdi mdi-magnify"></i>
                    </button>
                    <input type="text" name="query" id="search-input" className="form-control" placeholder="'button', 'chart' etc."
                        autoFocus autoComplete="off" />
                </div>
                <div id="search-results-container">
                    <ul id="search-results"></ul>
                </div>
            </div>
        );
    }
}

export default Searchbar;