import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';
import Sort from '../Sort/Sort';


const TaskList = (props) => {

    const sortOptionsActiveTasks = [
        {
            name: 'Task names from A to Z',
            method: 'fromA',
        },
        {
            name: 'Task names from Z to A',
            method: 'fromZ'
        },
        {
            name: 'Priority',
            method: 'priority'
        },
    ];
    const sortOptionsDoneTasks = [
        {
            name: 'From the oldest',
            method: 'fromOldest',

        },
        {
            name: 'From the latest',
            method: 'fromLatest'
        },
        {
            name: 'Task names from A to Z',
            method: 'fromA',
        },
        {
            name: 'Task names from Z to A',
            method: 'fromZ'
        }
    ];

    const toDoTasks = props.activeTasks.map(task => (
        <Task key={task.id}
            task={task}
            delete={props.delete}
            change={props.change} />
    ));

    const done = props.doneTasks.map(task => (
        <Task key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
            showAllTasks={props.showAllTasks} />
    ));

    return (
        <div className='TaskList'>
            <div className='ToDo'>
                <div className='ToDoHeading'>
                    <h1>Things to be done</h1>
                    <h3>You have {props.activeTasks.length} things to do. </h3>
                    {props.activeTasks.length > 1 && <Sort selectName='ToDo' select={props.select} sortOptions={sortOptionsActiveTasks} />}
                </div>
                {props.activeTasks.length > 0 ? toDoTasks : <span className='Encouragement'>You've got nothing to do. Start adding new tasks!</span>}
            </div>

            <div className='Done'>
                <div className='DoneHeading'>
                    <h1>Tasks already done</h1>
                    <h3>You've managed to accomplish {props.doneTasks.length} tasks</h3>
                    {props.doneTasks.length > 1 && <Sort selectName='Done' select={props.select} sortOptions={sortOptionsDoneTasks} />}
                </div>
                {props.doneTasks.length > 3 && <div className='WarningWrapper'>
                    <span className='Warning'>only last three tasks are being displayed</span>
                    <button onClick={props.showAllTasks}>Show all tasks</button>
                </div>}
                {props.displayTasks ? done : done.splice(0, 3)}
            </div>
        </div>
    );
}

export default TaskList;