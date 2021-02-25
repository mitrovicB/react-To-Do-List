import React from 'react';
import './App.css';

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
            <li key={task.id}>{task.text}</li>
        ))}
     </ul>
    );
  }
}


class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      checked: true,
      tasks: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  
  handleClick(event) {
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newTask = {
      text: this.state.text,
      id: Date.now()
    };
    
    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      text: ''
    }));

    console.log("clicked!");
    console.log(newTask);
  }
 

  render() {
    return (
      <div>
        <div className="app-header">
          <h1>TO DO LIST</h1>
          <div>
            <input id="new-todo" 
            onChange={this.handleChange}
            value={this.state.text}
            />
          <button onClick={this.handleClick}>Add</button>
          </div>
        </div>
        <div  className="todo-list">
        <ToDoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}


export default ToDoApp;
