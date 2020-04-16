import React from 'react';
import AddInput from './container/Input';
import SearchAndList from './container/SearchAndList';
import './style/App.css';
import './style/animate.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="col-md-12 mb-4">
        <SearchAndList />
        <AddInput />
      </div>
      <Footer />
    </div>
  );
}

export default App;
