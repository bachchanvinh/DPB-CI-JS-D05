import React from 'react'
import { Header } from './Todo/Header'
import { Inputtodo } from './Todo/Inputtodo'


class Apptodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: this.props.datauser
    };
    this.show = this.show.bind(this)
  }
  show() {
    this.setState({ todoList: this.props.datauser })
    let arr = this.state.todoList
    return arr
  }
  render() {
    return (

      <div className="Todo">
        <Header />
        <Inputtodo Enter={this.props.Enter} />
        {this.state.todoList}
      </div>
    );
  }
}

export default Apptodo;
