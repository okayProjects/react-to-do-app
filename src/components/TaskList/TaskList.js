import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = (props) => {

    const activeTasks = props.tasks.filter(task => task.active);
    const doneTasks = props.tasks.filter(task => !task.active);

    if (activeTasks.length >= 2) {
        activeTasks.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase()

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }

    if (doneTasks.length >= 2) {
        doneTasks.sort((a, b) => {
            if (a.expiry > b.expiry) return -1;
            if (a.expiry < b.expiry) return 1;
            return 0
        })
    }

    const toDoTasks = activeTasks.map(task => (
        <Task key={task.id}
            task={task}
            delete={props.delete}
            change={props.change} />
    ));

    const done = doneTasks.map(task => (
        <Task key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
            showAllTasks={props.showAllTasks} />
    ))


    return (
        <div className='TaskList'>
            <div className='ToDo'>
                <h1>Things to be done</h1>
                <h3>You have {activeTasks.length} things to do. </h3>
                {activeTasks.length > 0 ? toDoTasks : <span>You've got nothing to do</span>}
            </div>

            <div className='Done'>
                <h1>Tasks already done</h1>
                <h3>You've managed to accomplish {doneTasks.length} tasks</h3>
                {doneTasks.length > 3 && <div className='WarningWrapper'>
                    <span className='Warning'>only last three tasks are being displayed</span>
                    <button onClick={props.showAllTasks}>Show all tasks</button>
                </div>}
                {props.displayTasks ? done : done.splice(0, 3)}
            </div>
        </div>
    );
}

export default TaskList;