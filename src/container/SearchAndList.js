import React, { Component, Fragment } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
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
    listItems: PropTypes.arrayOf(object).isRequired,
    clearItems: PropTypes.func.isRequired
  };

  onDeleteItems() {
    this.props.clearItems();
  };

  onChange(e) {
    this.setState({ query: e.target.value });
  };

  render() {
      const { listItems, t } = this.props;
      const { query } = this.state;
      const result = searchResult(listItems, query);

    return (
      <Fragment>
        <div className="animated bounceIn">
          <div className="input-group">
            <input
              type="search"
              name="query"
              className="form-control"
              placeholder={t('search')}
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
                  {t('clear')}
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

export default withTranslation()(connect(mapStateToProps, { clearItems })(SearchAndList))
