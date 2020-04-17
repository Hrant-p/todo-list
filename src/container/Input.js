import React, { Component } from "react";
import PropTypes, {object} from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import { addItem } from "../action/action";
import { isEmpty } from "../helpers";

const todoArray = [
  'Do workout',
  'Go to the shop',
  'Buy vegetarians',
  'Drink water',
  'Learn JavaScript'
];

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onAddItems = this.onAddItems.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    todoArray.forEach(item => this.props.addItem(item));
  }

  onAddItems(e) {
    e.preventDefault();
    const { text } = this.state;
    const { addItem, t } = this.props;

    if (!isEmpty(text)) {
      addItem(text);
      this.setState({ text: "" });
    } else {
      alert(t('text_field_is_empty'));
    }
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  static propTypes = {
    addItem: PropTypes.func.isRequired,
    listItems: PropTypes.arrayOf(object).isRequired
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        <div className="input-group mt-4 delay-1s">
          <input
            type="text"
            name="text"
            placeholder={t('type_todo_item')}
            className="form-control"
            onChange={this.onChange}
            value={this.state.text}
            onSubmit={this.onAddItems}
          />
          <div className="input-group-append">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.onAddItems}
              >
                {t('add_todo_item')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listItems: state.listItems
});

export default withTranslation()(
    connect(mapStateToProps,
        { addItem }
    )(Input));
