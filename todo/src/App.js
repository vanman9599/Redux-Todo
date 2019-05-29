import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions'


class App extends React.Component {
  state = {
    todos: [], 
    todo: ''
  }
  componentDidMount(){
    this.setState( {
      todos: this.props.todos
    })
  }

  onInputChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onButtonClick = () => {
  if(this.state.todo){
  this.props.addTodo(this.state.todo);
  this.setState({
    todo: ''
  })
}}
  render(){
    return (
      <>
      <h1>Welcome to your Todo List</h1>
      <ul>
        {this.props.todos.map(todo => {
          return <li key={todo.value}>{todo.value}</li>
        })}
      </ul>
      <input type="text" name="todo" onChange={this.onInputChange} value={this.state.todo} />
      <button onClick={this.onButtonClick}>Add New Todo</button>
      </>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, { addTodo })(App);

