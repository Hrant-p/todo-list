import React, { Component } from 'react';
import AddInput from './components/SearchInput/AddInput';
import SearchInput from './components/SearchInput/SearchInput';
import List from './components/List';
import { connect } from "react-redux";
import './App.css';
import './animate.css';

class App extends Component {

  
  
    render() {
        const { listItems } = this.props;

        return (
          <div className="App">
            <div className="col-md-12 mb-4">
                    <SearchInput label={"Clear the TODO List"} />
                    <List todoItems={listItems} />
                    <AddInput label={"Add ToDo Items"} />
            </div>
          </div>
        );
  }
};

const mapDispatchToProps = (state) => ({
    listItems: state.listItems
});

export default connect(mapDispatchToProps)(App)
