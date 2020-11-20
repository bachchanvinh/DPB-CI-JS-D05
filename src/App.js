import React from 'react'
import './App.css';
import Apptodo from './Components/Apptodo'
import { Login } from './Components/Login/Login'
import { Todolist } from './Components/Todo/Todolist'
export let datauser = {
  id: "1",
  pass: "1",
  todo: ["wake up", "go to sleep"]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: datauser,
      display: {
        Apptodo: false
      },
      error: {
        sign: ""
      }
    }
    this.Signin = this.Signin.bind(this)
    this.showTodo=this.showTodo.bind(this)
    this.addTodo=this.addTodo.bind(this)
  }
  Signin(e) {
    let uname = e.target.parentElement.parentElement.children[2].value
    let upass = e.target.parentElement.parentElement.children[4].value
    if (uname !== this.state.user.id || upass !== this.state.user.pass) {
      this.setState({ error: { sign: "Username or Pass wrong" } })
    }
    else this.setState({ display: { Apptodo: true } })
  }
  showTodo(array) {
    let arrTodo=[]
    arrTodo = array.map(x => <Todolist todo={x} />)
    return arrTodo
  }
  
  addTodo(e) {
    let value = e.target.value
    if (e.key === 'Enter') {
      datauser.todo=[...this.state.user.todo,value]
      // console.log(this.state.user.todo)
      this.setState({user:datauser})
      this.showTodo( datauser.todo)
    }
  }
  render() {
    return (
      <div className="Apptodo">
        <Login tellerror={this.state.error.sign} Clickin={this.Signin} />
        {this.state.display.Apptodo && <Apptodo Enter={this.addTodo} datauser={this.showTodo(this.state.user.todo)} />}
      </div>
    );
  }
}

export default App;
