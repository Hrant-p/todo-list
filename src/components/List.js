import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class List extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
      
    const { todoItems } = this.props;

      let items = todoItems
        ? todoItems.map(item => (
            <li 
                className="list-group-item animated slideInDown"
                key={item.id}>
              {item.label}
            </li>
          ))
        : null;
      
      

    return (
      <ul className="list-group ">
        <li className="list-group-item active text-center">TODO LIST</li>
       {items}
      </ul>
    );
  }
}
export default List;