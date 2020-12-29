import React from 'react'
import { Ans } from './Ans'

export class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            ques:props.data
        }
    }
    render() {
        let answer=[this.state.ques.correct_answer,...this.state.ques.incorrect_answers]
         answer=answer.sort(func);
        function func(a, b) {  
          return 0.5 - Math.random();
        }
        let show = answer.map((x,ind)=>{return <Ans index={ind}onClick={this.props.onClick}key={ind} ans={x}/>})
        return (
            <div className={this.props.indexques}>
                <h5>{this.state.ques.question}</h5>
                 {show}
                 
            </div>
        )
    }
}