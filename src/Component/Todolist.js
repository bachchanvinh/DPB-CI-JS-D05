import React from 'react'


class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showtodo: props.showtodo
        }
    }
    render() {
        return (
            <div className="Todolist">
                {this.state.Todolist}
            </div>
        )
    }
}