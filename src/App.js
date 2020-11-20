import React from 'react'
import './App.css';
import { Apptodo } from './Components/Apptodo'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/Login/Signup'
import { Todolist } from './Components/Todo/Todolist'
let datauser = [{
  id: "1",
  pass: "1",
  todo: ["wake up", "go to sleep"]
}]
let index = 0
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: datauser,
      display: {
        Apptodo: false,
        Login: true,
        Signup: false,
      },
      error: {
        sign: ""
      }
    }
    this.sWitch = this.sWitch.bind(this)
    this.Signin = this.Signin.bind(this)
    this.Signup = this.Signup.bind(this)
    this.Logout = this.Logout.bind(this)
    this.showTodo = this.showTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)

  }
  sWitch(e) {
    this.setState({ display: { Login: !this.state.display.Login, Signup: !this.state.display.Signup } })
    this.state.display.Login === true ? e.target.innerText = "Log in" : e.target.innerText = "Sign up"
  }
  Signup(e) {
    let uname = e.target.parentElement.parentElement.children[2].value
    let upass = e.target.parentElement.parentElement.children[4].value
    let check = true
    for (let i = 0; i < datauser.length; i++) {
      if (uname === datauser[i].id) {
        check = false
        this.setState({ error: { sign: "Username has been use" } })
      }
    }
    if (check) {
      let newUser = {
        id: uname,
        pass: upass,
        todo: []
      }
      datauser.push(newUser)
      this.setState({
        user: datauser, display: { Login: true },
        error: { sign: "" }
      })
    }
  }
  Signin(e) {
    let uname = e.target.parentElement.parentElement.children[2].value
    let upass = e.target.parentElement.parentElement.children[4].value
    for (let i = 0; i < this.state.user.length; i++) {
      if (uname === this.state.user[i].id && upass === this.state.user[i].pass) {
        this.setState({
          display: { Apptodo: true },
          error: { sign: "" }
        })
        index = i
      }
      else this.setState({ error: { sign: "Username or Pass wrong" } })
    }
  }
  Logout(e) {
    this.setState({ display: { Apptodo: false, Login: true, Signup: false } })
  }
  showTodo(array) {
    let arrTodo = []
    arrTodo = array.map((x, n) => <Todolist todo={x} className={n} onClickX={this.removeTodo} />)
    return arrTodo
  }
  addTodo(e) {
    let value = e.target.value
    if (e.key === 'Enter') {
      datauser[index].todo = [...this.state.user[index].todo, value]
      console.log(this.state.user[index].todo)
      this.setState({ user: datauser })
      console.log(datauser[index].todo)
      // this.showTodo(datauser[index].todo)
      e.target.value = ""
    }
  }
  removeTodo(e) {
    datauser[index].todo.splice(Number(e.target.parentElement.className), 1)
    this.setState({ user: datauser })
    this.showTodo(datauser[index].todo)
    console.log(this.state.user[index].todo)
    // chua render lai duoc da remove data
  }
  render() {
    return (
      <div className="Apptodo">
        {!this.state.display.Apptodo && <button onClick={this.sWitch}>Log in</button>}
        {this.state.display.Apptodo && <button onClick={this.Logout}>Log out</button>}
        {this.state.display.Signup && <Signup Clickin={this.Signup} tellerror={this.state.error.sign} />}
        {this.state.display.Login && <Login tellerror={this.state.error.sign} Clickin={this.Signin} />}
        {this.state.display.Apptodo && <Apptodo Enter={this.addTodo} />}
        {this.state.display.Apptodo && this.showTodo(this.state.user[index].todo)}

      </div>
    );
  }
}

export default App;
