import React from 'react'
import { Header } from './Component/Header'
import { getData } from './Controller/Getdata'
import { Book } from './Component/Book'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookshow: [],
      booksearch: "12"  
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ booksearch: e.target.value })
  }
  handleSubmit() {
    getData(this.state.booksearch).then(data => {
      console.log(data)
      let booklist = []
      for (let i = 0; i < data.items.length; i++) {
        const title = data.items[i].volumeInfo.title;
        const id= data.items[i].id;
        const thumbnail = data.items[i].volumeInfo["imageLinks"];
        const authors=data.items[i].volumeInfo.authors;
        const description=data.items[i].volumeInfo.description
        booklist.push(<Book key ={id}
          title={title} 
          img={ thumbnail=== undefined ? "" : thumbnail.thumbnail}
          authors={authors} 
          description={description}/>)
      }
      this.setState({ bookshow: booklist })
    }).catch(console.log(123))
  }
  render() {
    return (
      <div className="App">
        <Header onClick={this.handleSubmit} onInput={this.handleChange} />
        <div className="Booklist">
          {this.state.bookshow}
        </div>
      </div>
    );
  }
}

export default App;
