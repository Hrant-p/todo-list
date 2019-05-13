import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class AddInput extends Component {
  constructor(props) {
     super(props);

     this.state = {};
     this.onClick = this.onClick.bind(this);
   }

   onClick() {
     console.log("onClick");
   }
  
  
    static propTypes = {
    label: PropTypes.string
  }

  render() {
    return (
      <div>
        <div className="input-group mt-4 delay-1s">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <div className="input-group-append">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
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
};

export default AddInput;


