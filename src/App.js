import React, { Component } from 'react';
import './App.css';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
      newItem: ''
    };

  }

  updateInput(key, value) {
    //update react state
    this.setState({ 
    [key]: value 
    });
  }
  
  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
}

  addItem() {
    if (this.state.newItem.length == 0) return;

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem
    this.setState(state => ({
      list,
      newItem: ''
    }));
  }

  render() {
    return (
      <div>
        <div className="app-header">
          <h1>TO DO LIST</h1>
          <div>
            <input 
            type="text"
            placeholder="Add an item"
            value={this.state.newItem} 
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
          <button 
          className="addTask-btn" 
          onClick={() => this.addItem()}>Add</button>
          </div>
        </div>
        <div className="todo-list">
          <ul>
          {this.state.list.map(item =>  {
            return (
              <li key={item.id}>
              {item.value}
                <button className="remove-btn" onClick={() => this.deleteItem(item.id)}>
                  <i className="fa fa-trash trash-icon"></i>
                </button>
              </li>
          );})}
          </ul>
        </div>
      </div>
    );
  }
}


export default ToDoApp;
