import React from 'react';
const on_img = './on.jpg'
const off_img = './off.jpg'

class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
        this.switchs = this.switchs.bind(this)
    }
    switchs() {
        this.setState({ isOn: !this.state.isOn })
    }

    render() {
        return (
            <div>
                <img src={this.state.isOn ? on_img : off_img} />
                <input type="button" value="switch" onClick={this.switchs} />
            </div>
        )
    }
}

export default Bulb