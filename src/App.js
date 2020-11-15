import React from 'react'
import './App.css';
import Header from './Component/Header'
import Searchinput from './Component/Searchinput'
import Emojilist from './Component/Emojilist'
import * as emojis from './Resource/emojiList copy.json'

let res = []
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showlist: showdefau()
    }
    this.showList = this.showList.bind(this)
  }
  showList(e) {
    Enterinput(e)
    let list = []
    if (res.length === 0) {
      list = showdefau()
    }
    else {
      let length = res.length
      if (length > 20) { length = 21 }
      for (let i = 0; i < length; i++) {
        // console.log(emojis.default[res[i]])
        list.push(
          <Emojilist symbol={emojis.default[res[i]].symbol} title={emojis.default[res[i]].title} />
        )
      }
      // console.log(list)
    }

    this.setState({ showlist: list })
    // console.log(this.state.showlist)
    return this.state.showlist
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Searchinput aFunction={this.showList} />
        <div className="Emoji">{this.state.showlist}
        </div>
      </div>
    );
  }
}

function Enterinput(e) {
  let value = e.target.value
  let data = emojis.default
  res = []
  let arrcheck = []
  for (let i = 0; i < data.length; i++) {

    arrcheck = data[i].keywords.split(' ');
    // console.log(arrcheck)
    for (let j = 0; j < arrcheck.length; j++) {
      if (arrcheck[j] === value && value !== '') {
        res.push(i)
        // console.log(res)
        break
      }
    }
  }
  // console.log(res, 2)

}
export default App;
function showdefau() {
  let list = []
  for (let i = 0; i < 20; i++) {
    list.push(
      <Emojilist symbol={emojis.default[i].symbol} title={emojis.default[i].title} />
    )
  }
  return list
}

