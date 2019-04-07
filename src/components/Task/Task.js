import React from 'react';

const Task = (props) => {

    const { text, date, id, active, important, expiry } = props.task;
    const style = {
        color: 'orange'
    }

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> done until <span>{date} </span>
                    <button onClick={() => props.change(id)}>DONE</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {

        const expiryTime = new Date(expiry).toLocaleString()
        return (
            <div>
                <p>
                    <strong>{text}</strong> do <span>{date} </span><br></br>
                    <em>Confirmed {expiryTime}</em>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;