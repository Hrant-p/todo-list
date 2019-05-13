import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
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
