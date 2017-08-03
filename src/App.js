import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleChange, submitTask, completeTask, deleteTask } from './ducks/reducer';
import './App.css';
import Task from './Task';

class App extends Component {
  render() {
    const {
      value,
      handleChange,
      submitTask,
      list,
      completeTask,
      deleteTask,
    } = this.props;

    return (
      <div className="App">
       To-do:
       <input type="text" value={value} onChange={handleChange}/>
       <button onClick={() => submitTask(value)}>Save </button>
       <Task list={list} completeTask={completeTask} deleteTask={deleteTask}/>
      </div>
    );
  }
}

// function mapStateToProps (state) {
//   return state;
// }

export default connect((state) => {
  return state;
},{ handleChange, submitTask ,completeTask, deleteTask })(App);
