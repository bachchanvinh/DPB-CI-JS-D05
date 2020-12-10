import React from 'react'
import { Todoapp } from './Component/Todoapp'
import { Signin } from './Component/Signin'
import { Signup } from './Component/Signup'
import { Signupfunc, Signinfunc, CurentSignin } from './Controller/Todocontroll'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: { Signin: true }
    }
    this.handleonChangeuname = this.handleonChangeuname.bind(this)
    this.handleonChangeemail = this.handleonChangeemail.bind(this)
    this.handleonChangepass = this.handleonChangepass.bind(this)
    this.handleSignin = this.handleSignin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }
  handleonChangeuname(e) {
    this.setState({ uname: e.target.value })
  }
  handleonChangeemail(e) {
    this.setState({ email: e.target.value })
  }
  handleonChangepass(e) {
    this.setState({ pass: e.target.value })
  }
  handleSignin() {
    Signinfunc(this.state.email, this.state.pass)
      .then((data) => {
        this.setState({
          tododata: data.todos,
          display: { Todoapp: true },
          uid: CurentSignin().uid,
        })
        console.log(this.state.uid)
      })
  }
  handleSignup() {
    Signupfunc(this.state.email, this.state.pass, this.state.uname)
    this.setState({ display: { Signin: true } })
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          {this.state.display.Signin && <button onClick={() => this.setState({ display: { Signup: true } })}>Signup</button>}
          {this.state.display.Signup && <button onClick={() => this.setState({ display: { Signin: true } })}>Signin</button>}
          {this.state.display.Todoapp && <button onClick={() => this.setState({ display: { Signin: true } })}>Signout</button>}
        </div>
        {this.state.display.Signin && <Signin onChangeemail={this.handleonChangeemail} onChangepassword={this.handleonChangepass} onClicksignin={this.handleSignin} />}
        {this.state.display.Signup && <Signup onChangeuname={this.handleonChangeuname} onChangeemail={this.handleonChangeemail} onChangepassword={this.handleonChangepass} onClickSignup={this.handleSignup} />}
        {this.state.display.Todoapp && <Todoapp datatodo={this.state.tododata} uid={this.state.uid} />}
      </div>
    );
  }
}

export default App;
