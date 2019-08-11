import React, { Component } from "react";
import "./App.css";
import TodoItem from "./ToDoItem";
import toDo from "./data";

// function App() {
//   return (
//     <div className="App">
//        <TodoItem />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoArray: toDo,
      test: "test"
    };
  }

  updateCheck = id => {
    this.setState(previousState => {
      const updatedState = previousState.toDoArray.map(elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      });
      return { toDoArray: updatedState };
    });
  };

  render() {
    console.log("state", this.state);
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <div>
          <TodoItem
            toDoList={this.state.toDoArray}
            updateCheck={this.updateCheck}
          />
        </div>
      </div>
    );
  }
}

export default App;
