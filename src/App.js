import React, { Component } from 'react';
import './App.css';
import './Custom.css'
import TodoItems from './components/TodoItems';


class App extends Component {
    constructor(props){
      super(props)
      this.state ={
            items:[]
      };
      this.addItem = this.addItem.bind(this);
    }
    addItem(e){
      if (this._inputElement.value !== ""){
         var newItem = {
          text: this._inputElement.value,
          Key: Date.now()
        };

      this.setState((prevState) => {
        return{
          items : prevState.items.concat(newItem)
        };
      });
      }
      this._inputElement.value = "";
      e.preventDefault();
    }
  
  render() {
     return (
      <div className=" container TodoListMain">
        <div className= "header">
        <h1>Todo List Application</h1>
            <form  onSubmit ={this.addItem}>
              <input 
              ref = {(a)=> this._inputElement = a}
              placeholder ="enter the task"></input>
              <button className = "btn btn-primary btn-lg" type ="submit">add</button>
            </form>
        </div>
        <TodoItems entries = {this.state.items}/> 
      </div>
    );
  }
}

export default App;
