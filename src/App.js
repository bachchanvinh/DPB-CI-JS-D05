import React from 'react'
import { Todoapp } from './Component/Todoapp'
import { Signin } from './Component/Signin'
import { Signup } from './Component/Signup'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: { Signin: true }
    }
    this.handleonChangeemail = this.handleonChangeemail.bind(this)
    this.handleonChangepass = this.handleonChangepass.bind(this)
  }
  handleonChangeemail(e) {
    this.setState({ email: e.target.value })
  }
  handleonChangepass(e) {
    this.setState({ pass: e.target.value })
  }
  handleSignin() {

  }
  handleSignup() {

  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          {this.state.display.Signin && <button onClick={() => this.setState({ display: { Signup: true } })}>Signup</button>}
          {this.state.display.Signup && <button onClick={() => this.setState({ display: { Signin: true } })}>Signin</button>}
          {this.state.display.Signout && <button onClick={() => this.setState({ display: { Signin: true } })}>Signout</button>}
        </div>
        {this.state.display.Signin && <Signin onChangeemail={this.handleonChangeemail} onChangepassword={this.handleonChangepass} />}
        {this.state.display.Signup && <Signup />}
        {this.state.display.Todoapp && <Todoapp />}

      </div>
    );
  }
}

export default App;
