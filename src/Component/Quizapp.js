import React from 'react'
import { Getdata } from '../Controller/Getdata'
import { Question } from './Ques'
export class Quizapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: { ques: false },
            res:0,
        }
        this.handlestart = this.handlestart.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount() {
        Getdata().then(data => {
            let showques = data.results.map((x,ind) => { return <Question  indexques={ind}onClick={(e)=>this.checked(e,ind)}key = {ind} data={x} /> })
            this.setState({ data: data.results,
            showques:showques,
        display:{start:true}})
        }
        )
            .then(() => console.log(this.state.data))
    }
    handlestart() {
        this.setState({ display: { ques: true } })
    }
    checked(e,ind){
        let res = this.state.res
        console.log(ind)
        console.log(e.target.parentElement.innerText)
        if(this.state.data[ind].correct_answer===e.target.parentElement.innerText){
            this.setState({res:res+2})
        }
        console.log(res)
    }
    handleSubmit(){
        alert(`Your res is `+this.state.res+`/10`)
        Getdata().then(data => {
            let showques = data.results.map((x,ind) => { return <Question  indexques={ind}onClick={(e)=>this.checked(e,ind)}key = {ind} data={x} /> })
            this.setState({ data: data.results,
            showques:showques,
        display:{start:true}})
        })
    }
    render() {
        
        return (
            <div className="Quizapp">
               {this.state.display.start && <button onClick={this.handlestart} className="Startbtn">Start</button>}
               {this.state.display.ques && <div className="Quizz">
                  { this.state.showques}
               </div>}
                {this.state.display.ques && <button className="Startbtn" onClick={this.handleSubmit}>Submit</button>}
            </div>
        )
    }
}
