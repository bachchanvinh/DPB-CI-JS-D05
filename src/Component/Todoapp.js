import React from 'react'
import { Todoheader } from './Todoheader'
import {Todo} from './Todo'

export class Todoapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showtodo: [<Todo Todo="asasd"/>,<Todo Todo="asasd"/>,<Todo Todo="asasd"/>,<Todo Todo="asasd"/>,]
        }
    }
    render() {
        return (
            <div className="Todoapp">
                <Todoheader />
                <div className="Todolist">
                    {this.state.Todolist}
                </div>
            </div>
        )
    }
}