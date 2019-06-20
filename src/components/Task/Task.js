import React from 'react';
import './Task.css';

const Task = (props) => {

    const { text, date, id, active, important, expiry } = props.task;
    const style = {
        color: '#fff',
        backgroundColor: 'orange'
    }

    if (active) {
        return (
            <div className='ActiveTask'>
                <div>
                    <span style={important ? style : null}>{text}</span>
                    <span>deadline: {date} </span>
                </div>
                <div className='ActiveTaskButtonsWrapper'>
                    <button onClick={() => props.change(id)}>DONE</button>
                    <button onClick={() => props.delete(id)}>DELETE</button>
                </div>
            </div>
        );
    } else {

        const expiryTime = new Date(expiry).toLocaleString()
        return (
            <div className='DoneTask'>
                <div>
                    <span>{text}</span>
                    <span>inisial deadline: {date}</span>
                    <em>Confirmed {expiryTime}</em>
                </div>
                <button onClick={() => props.delete(id)}>DELETE</button>
            </div >
        )
    }
}

export default Task;