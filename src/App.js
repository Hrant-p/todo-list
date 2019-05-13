import React, { Component } from 'react';
import './App.css';
import './animate.css'
import AddInput from './components/SearchInput/AddInput';
import SearchInput from './components/SearchInput/SearchInput';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todoItems: [
          { label: "Do workout", id: 1 },
          { label: "Go to the shop", id: 2 },
          { label: "Buy vegetarians", id: 3 },
          { label: "Drink water", id: 4 },
          { label: "Learn JavaScript", id: 5 }
      ]
    };
  };

  
  
    render() {
        const { todoItems } = this.state;

        return (
          <div className="App">
            <div className="col-md-12 mb-4">
              <SearchInput label={"Clear the TODO List"} />

              <List todoItems={todoItems} />
              <AddInput label={"Add ToDo Items"} />
            </div>
          </div>
        );
  }
}

export default App;
