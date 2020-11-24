import React from 'react'
import './Asset/Css/AppandMenu.css'
import firebase from "firebase/app";//firebase
import "firebase/auth";//firebase
import "firebase/firestore";//firebase
import { firebaseConfig } from './Components/Res/firebase.config'//firebase
import './App.css';
import { Apptodo } from './Components/Apptodo'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/Login/Signup'
import { Todolist } from './Components/Todo/Todolist'
import { Edit } from './Components/Todo/Edit'

firebase.initializeApp(firebaseConfig);//firebase
const db = firebase.firestore();//firebase

let datauser = []
let idseveruser = []
let index = 0
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: datauser,
      display: {
        Apptodo: false,
        Login: true,
        Signup: false,
        Editing: "",
        Edit: false,
      },
      error: {
        sign: ""
      },
      place: ""
    }
    // this.textInput = React.createRef()
    this.sWitch = this.sWitch.bind(this)
    this.Signin = this.Signin.bind(this)
    this.Signup = this.Signup.bind(this)
    this.Logout = this.Logout.bind(this)
    this.Save = this.Save.bind(this)
    this.showTodo = this.showTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.readTodo = this.readTodo.bind(this)

  }
  componentDidMount() {
    db.collection("users")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          datauser.push(doc.data());
          idseveruser.push(doc.id)
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  sWitch(e) {
    console.log(this.state.display.Apptodo)
    this.setState({ display: { Login: !this.state.display.Login, Signup: !this.state.display.Signup }, error: { sign: "" } })
    this.state.display.Login === true ? e.target.innerText = "Log in" : e.target.innerText = "Sign up"
  }
  Signup(e) {

    let uname = e.target.parentElement.parentElement.children[2].value
    let upass = e.target.parentElement.parentElement.children[4].value
    let check = true
    for (let i = 0; i < datauser.length; i++) {
      if (uname === datauser[i].id || uname === "") {
        check = false
        this.setState({ error: { sign: "Username can't be used" } })
      }
    }
    if (check) {
      let newUser = {
        id: uname,
        pass: upass,
        todo: []
      }
      datauser.push(newUser)
      this.setState({
        user: datauser,
        display: { Login: true },
        error: { sign: "" }
      })
      db.collection("users").add({
        id: uname,
        pass: upass,
        todo: []
      })
        .then(function (docRef) {
          idseveruser.push(docRef.id)
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }
  Signin(e) {

    let uname = e.target.parentElement.parentElement.children[2].value
    let upass = e.target.parentElement.parentElement.children[4].value
    for (let i = 0; i < this.state.user.length; i++) {
      if (uname === this.state.user[i].id && upass === this.state.user[i].pass) {
        this.setState({
          display: { Apptodo: true },
          error: { sign: "" }
        })
        index = i
        break
      }
      else { this.setState({ error: { sign: "Username or Pass wrong" } }) }
    }
  }
  Logout() {
    this.setState({ display: { Apptodo: false, Login: true, Signup: false } })
    // To update age and favorite color:
    db.collection("users").doc(idseveruser[index]).update({
      "todo": this.state.user[index].todo
    })
      .then(function () {
        console.log("Document successfully updated!");
      });
  }
  Save() {
    console.log(index)
    this.setState({ user: datauser })
    db.collection("users").doc(idseveruser[index]).update({
      "todo": this.state.user[index].todo
    })
      .then(function () {
        console.log("Document successfully updated!");
      });

  }
  showTodo(array) {
    let arrTodo = []
    arrTodo = array.map((x, n) => <Todolist todo={x} className={n} onClickedit={this.readTodo} onClickX={this.removeTodo} />)
    return arrTodo
  }
  addTodo(e) {
    let value = e.target.value
    if (e.key === 'Enter') {
      datauser[index].todo = [...this.state.user[index].todo, value]
      this.setState({ user: datauser })
      // this.showTodo(datauser[index].todo)
      e.target.value = ""
    }
  }
  readTodo(e) {
    let value = e.target.parentElement.parentElement.parentElement.children[0].innerText
    console.log(value)
    let place = e.target.parentElement.parentElement.parentElement.children[0].className
    console.log(place)
    this.setState({
      display: { Apptodo: true, Editing: value, Edit: true },//SAI GI DO
      place: Number(place)
    })

    // this.textInput.current.focus()

  }
  updateTodo(e) {
    this.setState({ display: { Apptodo: true, Edit: true, Editing: e.target.value } })
    if (e.key === "Enter") {
      datauser[index].todo[this.state.place] = e.target.value
      this.setState({
        user: datauser,
        display: { Apptodo: true, Edit: false }
      })
    }
    else if (e.type === "click" || e.key === "Escape") {
      this.setState({
        display: { Apptodo: true, Edit: false }
      })
    }
  }
  removeTodo(e) {
    datauser[index].todo.splice(Number(e.target.parentElement.className), 1)
    this.setState({ user: datauser })
    this.showTodo(datauser[index].todo)
  }
  render() {
    return (
      <div className="Apptodo">
        <div className="Menubar">
          <div className="Blankheader"></div>
          <h1>This is Todo App</h1>
          <div className="threebut">
            {!this.state.display.Apptodo && <button onClick={this.sWitch}>Sign up</button>}
            {this.state.display.Apptodo && <button onClick={this.Save}>Save</button>}
            {this.state.display.Apptodo && <button onClick={this.Logout}>Log out</button>}
          </div>

        </div>
        {this.state.display.Signup && <Signup Clickin={this.Signup} tellerror={this.state.error.sign} />}
        {this.state.display.Login && <Login tellerror={this.state.error.sign} Clickin={this.Signin} />}
        {this.state.display.Apptodo && <div className="todoApp">
          <Apptodo Enter={this.addTodo} account={this.state.user[index].id} />

          {this.state.display.Edit && <div><div className="Blur" onClick={this.updateTodo}></div> <Edit value={this.state.display.Editing} onChange={this.updateTodo} Enter={this.updateTodo} autoFocus={this.textInput} /></div>}
          <div className="Todolist">
            {this.showTodo(this.state.user[index].todo)}
          </div>
        </div>}
      </div>
    );
  }
}

export default App;
