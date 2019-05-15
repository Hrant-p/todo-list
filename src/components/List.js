import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../helpers';
import { connect } from 'react-redux';
import '../App.css';
import classnames from 'classnames';
import { markItem, removeItem } from '../action/action';




 class List extends Component {
  constructor(props) {
    super(props);

    this.onMark = this.onMark.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  onMark(id){
    this.props.markItem(id);
  };

  onDelete(id) {
    this.props.removeItem(id);
  };

    static propTypes = {
    todoItems: PropTypes.array.isRequired,
    markItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  };

  

  render() {
      
    const { todoItems } = this.props;
    const items = todoItems.map(item => (
      <li className="list-group-item animated slideInDown" key={item.id}>
        <div className="d-flex justify-content-between">
            <span 
                className={classnames("col-sm-8", {
                    'marked': item.marked
                })}
                onClick={() => this.onMark(item.id)}>
                {item.label}
                </span>
            
            <button 
                type="button" 
                className="btn btn-outline-danger btn-sm"
                onClick={() => this.onDelete(item.id)}>
            <i className="fa fa-trash animated fadeInRight slow"/>
            </button>
        </div>
        
      </li>
    ));
      

    return (
      <ul className="list-group">
        <li className="list-group-item active text-center">TODO LIST</li>
        {isEmpty(todoItems) ? null : items}
      </ul>
    );
  }
};

const mapDispatchToProps = state => ({
    listItems: state.listItems
})

export default connect(mapDispatchToProps, { markItem, removeItem } )(List);