import React, { Component } from 'react';
import AddInput from './components/Inputs/AddInput';
import SearchAndList from './components/Inputs/SearchAndList'
import './App.css';
import './animate.css';

class App extends Component {  
  
    render() {        
        return (
          <div className="App">
            <div className="col-md-12 mb-4">
              <SearchAndList />
              <AddInput />
            </div>
          </div>
        );
  }
};

export default App
