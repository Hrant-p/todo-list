import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../action/action'

 class AddInput extends Component {
  constructor(props) {
     super(props);

     this.state = {
         text: ''
     };
     this.onAddItems = this.onAddItems.bind(this);
     this.onChange = this.onChange.bind(this);
   }

   onAddItems() {
     const { text } = this.state;
    
    this.props.addItem(text);

     this.setState({text: ''})
   };

   onChange (e) {
        this.setState({
            text: e.target.value
        })
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
            name="text"
            placeholder="Type the ToDo info"
            className="form-control"
            onChange={this.onChange}
            value={this.state.text}
          />
          <div className="input-group-append">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.onAddItems}
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

const mapDispatchToProps = state => ({
    listItems: state.listItems
})

export default connect(mapDispatchToProps, { addItem })(AddInput);


