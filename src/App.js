import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

class App extends Component {

  counter = 0;

  state = {
    activeTasks: [],
    doneTasks: [],
    showAllTasks: false,
  }

  deleteTaskHandler = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState(prevState => {
    //   return { tasks: prevState.tasks = tasks };
    // });

    let activeTasks = [...this.state.activeTasks];
    activeTasks = activeTasks.filter(task => task.id !== id);
    this.setState({ activeTasks })
    let doneTasks = [...this.state.doneTasks];
    doneTasks = doneTasks.filter(task => task.id !== id);
    this.setState({ doneTasks })
  }

  changeTaskHandler = (id) => {
    let doneTasks = [...this.state.doneTasks];
    let activeTasks = Array.from(this.state.activeTasks);
    activeTasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.expiry = new Date().getTime();
        doneTasks.push(task);
      };
    });
    activeTasks = activeTasks.filter(task => task.active);
    this.setState({ activeTasks, doneTasks });
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

    this.setState(prevState => {
      return { activeTasks: [...prevState.activeTasks, task] };
    });
    return true;
  }

  showAllTasks = (e) => {
    if (this.state.showAllTasks) {
      e.target.textContent = 'Show all tasks';
    } else {
      e.target.textContent = 'Show last three tasks';
    }

    this.setState(prevState => {
      return { showAllTasks: prevState.showAllTasks = !prevState.showAllTasks };
    });
  }

  selectHandler = (value, name) => {
    if (name === 'ToDo') {
      let activeTasks = [...this.state.activeTasks];

      switch (value) {
        case 'fromA':
          activeTasks.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
          });
          break;
        case 'fromZ':
          activeTasks.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a > b) return -1;
            if (a < b) return 1;
            return 0
          });
          break;
        case 'fromOldest':
          activeTasks.sort((a, b) => {
            if (a.expiry > b.expiry) return -1;
            if (a.expiry < b.expiry) return 1;
            return 0
          });
          break;
        case 'fromLatest':
          activeTasks.sort((a, b) => {
            if (a.expiry < b.expiry) return -1;
            if (a.expiry > b.expiry) return 1;
            return 0
          });
          break;
        case 'priority':
          activeTasks.sort((a, b) => {
            if (a.important && !b.important) return -1;
            if (!a.important && b.important) return 1;
            return 0;
          })
          break;

        default: activeTasks = this.state.activeTasks;
      }
      this.setState(prevState => {
        return { activeTasks: prevState.activeTasks = activeTasks };
      });

    } if (name === 'Done') {
      let doneTasks = [...this.state.doneTasks];

      switch (value) {
        case 'fromA':
          doneTasks.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
          });
          break;
        case 'fromZ':
          doneTasks.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a > b) return -1;
            if (a < b) return 1;
            return 0
          });
          break;
        case 'fromOldest':
          doneTasks.sort((a, b) => {
            if (a.expiry > b.expiry) return -1;
            if (a.expiry < b.expiry) return 1;
            return 0
          });
          break;
        case 'fromLatest':
          doneTasks.sort((a, b) => {
            if (a.expiry < b.expiry) return -1;
            if (a.expiry > b.expiry) return 1;
            return 0
          });
          break;

        default: doneTasks = this.state.doneTasks;
      }

      this.setState(prevState => {
        return { doneTasks: prevState.tasks = doneTasks };
      });
    }
  }


  render() {
    return (
      <div className="App">
        <AddTask addTask={this.addTaskHandler} />
        <TaskList
          activeTasks={this.state.activeTasks}
          doneTasks={this.state.doneTasks}
          displayTasks={this.state.showAllTasks}
          delete={this.deleteTaskHandler}
          change={this.changeTaskHandler}
          showAllTasks={this.showAllTasks}
          select={this.selectHandler}
        />
      </div>
    );
  }
}

export default App;
