import React from 'react'
import { Header } from './Component/Header'
import { Charity } from './Component/Charity'
import './App.css';
const url_target = "https:api.globalgiving.org/api/public/services/search/projects/summary/"
const apikey = `71a7650b-e6c8-4955-987f-91401c411cac`
const url = `${url_target}?api_key=${apikey}`
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      charitys: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    fetch(`${url}&q=${this.state.search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then(res => res.json())
      .then(res => {
        if (res === undefined) { return console.log("No result") }
        const data = res.search.response.projects.project

        console.log(data)
        let length = data.length
        let arr = []
        if (length > 20) { length = 20 }
        console.log(length)
        for (let i = 0; i < length; i++) {
          console.log(i, arr)
          const title = data[i].title
          const src = data[i].imageLink
          const name = data[i].organization.name
          const id = data[i].organization.id
          const city = data[i].organization.city
          const country = data[i].organization.country
          const href = data[i].organization.url
          arr.push(<Charity title={title} src={src} name={name} id={id} city={city} country={country} href={href} />)
        }
        this.setState({ charitys: arr })
        console.log(this.state.charitys)
      }).catch(err => console.log(err))
  }
  handleChange(e) {
    this.setState({ search: e.target.value })
  }
  render() {
    return (<div className="App">
      <Header onChange={this.handleChange} onClick={this.handleClick}></Header>
      <div className="Charitys">
        {this.state.charitys}
      </div>
    </div>)
  }
}

export default App;
