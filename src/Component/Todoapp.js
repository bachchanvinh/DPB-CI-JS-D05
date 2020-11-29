import React from 'react'
import { Todoheader } from './Todoheader'
import { Todo } from './Todo'
import { Todoedit } from './Todoedit'

export class Todoapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoadd: "",
            datatodo: [`aaasd1`, `aaasd2`, `aaasd3`],
            valueedit: {
                index: 0,
                value: "asdasd",
            }
        }
        this.addtodo = this.addtodo.bind(this)
        this.clickedit = this.clickedit.bind(this)
        this.deletetodo = this.deletetodo.bind(this)
    }
    componentDidMount() {

    }
    addtodo(e) {
        if (e.key === "Enter") {
            let todos = this.state.datatodo
            todos.push(e.target.value)
            this.setState({ datatodo: todos })
            e.target.value = ""
        }
    }
    clickedit(indx) {
       
        this.setState({valueedit: {
            index: indx,
            value: this.state.datatodo[indx],
        }})
        console.log(this.state.valueedit)
    }
    deletetodo(indx) {
        let todos = this.state.datatodo
        todos.splice(indx, 1)// them function firebase sau
        this.setState({ datatodo: todos })
    }
    render() {
        return (
            <div className="Todoapp">
                <Todoheader onChange={this.addtodo} onKeyDown={this.addtodo} />
                <div className="Todolist">
                    {this.state.datatodo.map((x, index) => {
                        return (<Todo key={index} Todo={x} clickEdit={() => this.clickedit(index)} clickDelete={() => this.deletetodo(index)}
                        />)
                    })}
                </div>
                <Todoedit value={this.state.valueedit.value} />
            </div>
        )
    }
}