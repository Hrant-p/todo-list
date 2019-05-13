import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       query: ''
    };
  };
  
  
  
   static propTypes = {
    // prop: PropTypes
  };

  onClick() {

  };

  onSearchInput() {

  }

  render() {
    return (
      <div className="animated bounceIn">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to seach"
          />
          <div className="input-group-append">
            <div>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClick}
              >
                {this.props.label}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
