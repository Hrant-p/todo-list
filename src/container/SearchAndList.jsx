import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearItems } from '../action/action';
import List from './List';
import { searchResult } from '../helpers';

class SearchAndList extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onDeleteItems = this.onDeleteItems.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  static propTypes = {
    listItems: PropTypes.array.isRequired,
    clearItems: PropTypes.func.isRequired
  };

  onDeleteItems() {
    this.props.clearItems();
  };

  onChange(e) {
    this.setState({ query: e.target.value });
  };

  render() {
      const { listItems } = this.props;
      const { query } = this.state;
      const result = searchResult(listItems, query);

    return (
      <Fragment>
        <div className="animated bounceIn">
          <div className="input-group">
            <input
              type="text"
              name="query"
              className="form-control"
              placeholder="Type to seach"
              value={this.state.query}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onDeleteItems}
                >
                  Clear the TODO List
                </button>
              </div>
            </div>
          </div>
        </div>
        <List todoItems={result} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    listItems: state.listItems
});

export default connect(mapStateToProps, { clearItems })(SearchAndList)
