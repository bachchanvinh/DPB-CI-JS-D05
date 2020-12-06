import React from 'react'
import '../Asset/CSS/Todoapp.css'
import { Todoheader } from './Todoheader'
import { Todo } from './Todo'
import { Todoedit } from './Todoedit'

export class Todoapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoadd: "",
            datatodo: [`aaasd1`, `aaasd2`, `aaasd3`],
            valueedit: "asdasd",
            indexedit: 0,
            displayedit: false,
        }
        this.addtodo = this.addtodo.bind(this)
        this.clickedit = this.clickedit.bind(this)
        this.edittodo = this.edittodo.bind(this)
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
        this.setState({
            valueedit: this.state.datatodo[indx],
            indexedit: indx,
            displayedit: true,
            autofocus:true,
        })

    }
    edittodo(e) {
        this.setState({ valueedit: e.target.value })
        if (e.key === "Enter") {
            let edit = e.target.value
            let datatodo = this.state.datatodo
            datatodo[this.state.indexedit] = edit
            this.setState({
                datatodo: datatodo,
                displayedit: false
            })
        }
        else if (e.type === 'click' || e.key === "Escape") {
            this.setState({ displayedit: false })
        }
    }
    deletetodo(indx) {
        let todos = this.state.datatodo
        todos.splice(indx, 1)// them function firebase sau
        this.setState({ datatodo: todos })
    }
    movetoend(e){
        let temp =e.target.value
        e.target.value=''
        e.target.value=temp
    }
    render() {
        return (
            <div className="Todoapp">
                {this.state.displayedit && <div><div className="Blur" onClick={this.edittodo}></div><Todoedit value={this.state.valueedit} onFocus={this.movetoend}autoFocus={this.state.autofocus} onKeyDown={this.edittodo} onChange={this.edittodo} /></div>}
                <Todoheader onChange={this.addtodo} onKeyDown={this.addtodo} />
                <div className="Todolist">
                    {this.state.datatodo.map((x, index) => {
                        return (<Todo key={index} Todo={x} clickEdit={() => this.clickedit(index)} clickDelete={() => this.deletetodo(index)}
                        />)
                    })}
                </div>

            </div>
        )
    }
}