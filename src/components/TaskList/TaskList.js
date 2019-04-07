import React from 'react';
import Task from '../Task/Task';

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
            change={props.change} />
    ))

    return (
        <>
            <div>
                <h1>My TaskList with jobs to be done {activeTasks.length}</h1>
                {activeTasks.length > 0 ? toDoTasks : <span style={{ fontSize: 20, fontWeight: 'bold' }}>You've got nothing to do</span>}
            </div>
            <hr />
            <div>
                <h2>Tasks already done {doneTasks.length}</h2>
                {doneTasks.length > 3 && <span>I am displaying only the last three tasks of all done</span>}
                {done.splice(0, 3)}
            </div>

        </>
    );
}

export default TaskList;