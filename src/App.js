import React from 'react';
import './App.css';
import Input from './components/SearchInput/AddInput';
import SearchInput from './components/SearchInput/SearchInput';
import List from './components/List';

function App() {
  
    return (
      <div className="App">
        <div className="col-md-12 mb-4">
            <SearchInput 
                label={"Clear the TODO List"}
            />

          <List />
          <Input label={"Add ToDo Items"}/>
        </div>
      </div>
    );
}

export default App;
