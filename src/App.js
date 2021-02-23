import React from 'react';
import './App.css';

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <div>
            <li key={task.id}>{task.text}<button>-</button></li>
          </div>
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
        <h1>TO DO LIST</h1>
        <div>
          <input id="new-todo" 
          onChange={this.handleChange}
          value={this.state.text}
          />
         <button onClick={this.handleClick}>Add task</button>
        </div>
        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}


export default ToDoApp;
