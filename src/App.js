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
          {false && <button onClick="">Signup</button>}
          {false && <button onClick="">Signin</button>}
          {true && <button onClick="">Logout</button>}
        </div>
        <Todoapp />
      </div>
    );
  }
}

export default App;
