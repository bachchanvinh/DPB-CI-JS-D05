import React from 'react'
import { Header } from './Todo/Header'
import { Inputtodo } from './Todo/Inputtodo'
import '../Asset/Css/Todoapp.css'

export function Apptodo (props) {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   };
  //   // this.show = this.show.bind(this)
  // }
  // show(e) {
  //   if(e.key==="Enter"){
  //    this.setState({ todoList: this.props.datauser })
  //   let arr = this.state.todoList
  //   return arr
  //   }
  // }
    return (

      <div className="Todo">
        <Header account={props.account} />
        <Inputtodo Enter={props.Enter} />
        {/* {this.state.todoList} */}
      </div>
    );
  
}

 
