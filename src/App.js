import './App.css';

import React, { Component } from 'react';

import TodoInput from './components/TodoInput';

let todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Alexander',
    todoDescription: 'Todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Alexander',
    todoDescription: 'Todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Alexander',
    todoDescription: 'Todo description',
    todoPriority: 'high'
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]});
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function (e, i) {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-warning alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong><h1>My learning react js todo list app</h1></strong>
        </div>
        <div className="page-header">
          <h1>React ToDo list app</h1>
        </div>
        <TodoInput
          onAddTodo={this.handleAddTodo}
          />
        <hr />
        <h4>
          Todo Count: <span className="badge">{this.state.todos.length}</span>
        </h4>
        <ul className="list-group">
          { this.state.todos.map((todo, index) =>
              <li className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
                <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {todo.todoResponsible}</p>
                <p>{todo.todoDescription}</p>
                <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
              </li>
          )}
        </ul>
        <hr />
        <div className="footer">
          <h5>&copy; Alexander Bryksin 2017 :)</h5>
        </div>
      </div>
    );
  }
}

export default App;