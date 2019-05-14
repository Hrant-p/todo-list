import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from '../isEmpty';

 class List extends Component {
  static propTypes = {
    todoItems: PropTypes.array.isRequired
  };

  

  render() {
      
    const { todoItems } = this.props;
    const items = todoItems.map(item => (
            <li
              className="list-group-item animated slideInDown"
              key={item.id}
            >
              {item.label}
            </li>
          ))
      

    return (
      <ul className="list-group ">
        <li className="list-group-item active text-center">TODO LIST</li>
        {isEmpty(todoItems) ? null : items}
      </ul>
    );
  }
}
export default List;