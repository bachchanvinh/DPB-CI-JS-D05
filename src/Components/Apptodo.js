import React from 'react'
import { Header } from './Todo/Header'
import { Inputtodo } from './Todo/Inputtodo'


class Apptodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: this.props.datauser
    };
    this.addtodo=this.addtodo.bind(this)
  }
  addtodo(e){
    // if(e.nativeEvent.data=="Enter"){
    this.setState({todoList:this.props.datauser})
    console.log(this.state.todoList)
    
  }
  render() {
    return (

      <div className="Todo">
        <Header />
        <Inputtodo Enter={this.props.Enter} Change={this.addtodo} />
        {this.state.todoList}
      </div>
    );
  }
}

export default Apptodo;
