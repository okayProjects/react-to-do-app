import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

class App extends Component {

  counter = 6;

  state = {
    tasks: [
      {
        id: 0,
        text: 'odpocząć',
        date: '2019-02-15',
        important: false,
        active: true,
        expiry: null
      },
      {
        id: 1,
        text: 'a to i tamto',
        date: '2019-02-15',
        important: false,
        active: true,
        expiry: null
      },
      {
        id: 2,
        text: 'umyć auto',
        date: '2019-02-15',
        important: true,
        active: true,
        expiry: null
      },
      {
        id: 3,
        text: 'pojechać na wczasy',
        date: '2019-02-15',
        important: false,
        active: true,
        expiry: null
      },
      {
        id: 4,
        text: 'zagrać w wiedźmina4',
        date: '2019-02-15',
        important: false,
        active: true,
        expiry: null
      },
      {
        id: 5,
        text: 'sprzedać buteliki',
        date: '2019-02-15',
        important: false,
        active: true,
        expiry: null
      },
    ]
  }

  deleteTaskHandler = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState(prevState => {
    //   return { tasks: prevState.tasks = tasks };
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({ tasks })
  }

  changeTaskHandler = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.expiry = new Date().getTime();
      }
    });
    this.setState({ tasks });
  }

  addTaskHandler = (text, date, important) => {
    const task = {
      id: this.counter++,
      text,
      date,
      important,
      active: true,
      expiry: null
    }

    // const tasks = [...this.state.tasks];
    // tasks.push(task)
    this.setState(prevState => {
      return { tasks: [...prevState.tasks, task] };
    });
    return true;
  }


  render() {
    return (
      <div className="App">
        <AddTask addTask={this.addTaskHandler} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTaskHandler}
          change={this.changeTaskHandler}
        />
      </div>
    );
  }
}

export default App;
