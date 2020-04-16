import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import '../style/App.css';
import classnames from 'classnames';
import { isEmpty } from '../helpers';
import { markItem, removeItem } from '../action/action';

class List extends Component {
  constructor(props) {
    super(props);
    this.onMark = this.onMark.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onMark(id) {
    this.props.markItem(id);
  }

  onDelete(id) {
    this.props.removeItem(id);
  }

  render() {
    const { todoItems } = this.props;
    const items = todoItems.map(item => (
      <li className="list-group-item animated slideInDown" key={item.id}>
        <div className="d-flex justify-content-between">
          <span
            className={classnames('col-sm-8', {
              marked: item.marked,
            })}
            onClick={() => this.onMark(item.id)}
          >
            {item.label}
          </span>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => this.onDelete(item.id)}
          >
            <i className="fa fa-trash animated fadeInRight slow" />
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
}

List.propTypes = {
  todoItems: PropTypes.arrayOf(object).isRequired,
  markItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listItems: state.listItems,
});

export default connect(mapStateToProps, { markItem, removeItem })(List);
