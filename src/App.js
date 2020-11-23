import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { Foodname } from './Components/Name'
import { Ingre } from './Components/Ingredients'
import { Video } from './Components/Video'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:{},
      ingre:[],
      video:"",
      display:false
    }
    this.random=this.random.bind(this)
  }
  random() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
        let dataingr=[]
        for(let i=1;i<20;i++){
          dataingr.push(  <Ingre Ingre={res.meals[0][`strIngredient${[i]}`]}/>)
          if(res.meals[0][`strIngredient${[i+1]}`]===""||res.meals[0][`strIngredient${[i+1]}`]===null){
            break
          }
        }
        let  str=res.meals[0].strYoutube
        str=str.replace(`watch?v=`,`embed/`)
        this.setState({data:res.meals[0],ingre:dataingr,video:str,display:true})
        console.log(res.meals[0])
      })
  }
  render() {
    return (
      <div className="App">
        <Header onClick={this.random}/>
       {this.state.display && <div><Foodname linkimg={this.state.data.strMealThumb} foodname={this.state.data.strMeal} detail={this.state.data.strInstructions} Cate={this.state.data.strCategory}  Area={this.state.data.strArea}/>
        <h2>Ingredients:</h2>
        <ul>
        {this.state.ingre}
        </ul>
       <h2>Video Recipe</h2> 
        <Video src={ this.state.video}/></div>}
      </div>
    );
  }
}

export default App;
