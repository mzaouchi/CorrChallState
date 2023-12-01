import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      tasks : [
        {text : "Nekel", isDone : false, id : Math.random()},
        {text : "Netrena", isDone : false, id : Math.random()},
        {text : "Ndawech", isDone : false, id : Math.random()},
      ],
      textP : ''
    }
  }
  addTask=()=> this.setState({tasks : [...this.state.tasks,{text : this.state.textP,isDone : false, id : Math.random()}],textP : ''})

  render(){
    return(
      <div>
        <h1>Challenge React State</h1>
        {
          this.state.tasks.map((el,i,t)=> 
          <div>
          <h2>{el.text}</h2>
          <button>Done</button>
          <button>Delete</button>
          </div>)
        }
        <br/>
        <br/>
        <input value={this.state.textP} onChange={(e)=> this.setState({textP : e.target.value})} type='text'/>
        <button onClick={this.addTask}>Ajouter</button>
      </div>
    )
  }
}

export default App;
