import React from 'react'
import './App.css';
import { Header } from './Component/Header'
import { Weatherlist } from './Component/Weatherlist'
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherlist: [],
      error:""
    }
    this.handleKeydown = this.handleKeydown.bind(this)
  }
  getData(inputVal) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`).then(res => res.json())
  }
  handleKeydown(e) {
    this.getData(e.target.parentElement.children[0].value)
      .then(data => {
        this.setState({error:""})
        console.log(data)
        let weather = <Weatherlist cityname={data.name} cel={data.main.temp} icon={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`} description={data.weather[0].description} />
        let list = this.state.weatherlist
        list.push(weather)
        this.setState({ weatherlist: list })
        console.log(this.state.weatherlist)
      }).catch(()=>{this.setState({error:"Invald city"})}
      )
  }
  render() {
    return (
      <div className="App">
        <Header onClick={this.handleKeydown} />
        {this.state.error}
        <div className="list">
          {this.state.weatherlist}
        </div>
      </div>
    );
  }
}

export default App;
