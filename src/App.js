import React from 'react'
import { Header } from './Components/Header'
import { Inputtodo } from './Components/Inputtodo'
import { Todolist } from './Components/Todolist'
import './App.css';

let dataReact = [<Todolist todo={'test'} />]
let arrTodo = []
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: this.showTodo()
    }
    this.addTodo = this.addTodo.bind(this)
  }
  showTodo() {
    arrTodo = dataReact.map(x => <Todolist todo={x} />)
    return arrTodo
  }
  addTodo(e) {
    let value = e.target.value
    if (e.key === 'Enter') {
      dataReact.push(<Todolist todo={value} />)
      this.setState({ todoList: this.showTodo() })
    }

  }
  render() {
    return (
      <div className="Apptodo">
        <Header />
        <Inputtodo Enter={this.addTodo} />
        <ul>
          {this.state.todoList}
        </ul>
      </div>
    );
  }
}

export default App;
