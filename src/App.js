import React from 'react'
import { Todoapp } from './Component/Todoapp'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <button onClick="">Signup</button>
        </div>
        <Todoapp />
      </div>
    );
  }
}

export default App;
