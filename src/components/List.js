import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class List extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
          <ul className="list-group">
            <li className="list-group-item active">ToDo list</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
    );
  }
}
export default List;