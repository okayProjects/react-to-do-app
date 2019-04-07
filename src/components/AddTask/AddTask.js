import React, { Component } from 'react';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    inputHandler = (e) => {
        const type = e.target.type;
        const text = e.target.value;
        const checked = e.target.checked;
        const date = e.target.value;

        if (type === 'date') {
            this.setState(prevState => {
                return { date: prevState.date = date };
            });
        } else if (type === 'text') {
            this.setState(prevState => {
                return { text: prevState.text = text };
            });
        } else if (type === 'checkbox') {
            this.setState(prevState => {
                return { checked: prevState.checked = checked };
            });
        }
    }

    addNewTaskHandler = () => {
        const { text, date, checked } = this.state;

        const add = this.props.addTask(text, date, checked);
        if (add) {
            this.setState(prevState => {
                return {
                    checked: prevState.checked = false,
                    text: prevState.text = '',
                    date: prevState.date = this.minDate
                };
            });
        }
    }

    render() {

        const maxDate = +this.minDate.slice(0, 4) + 1 + '-12-31';

        const style = {
            fontSize: 20,
            marginLeft: 10
        }

        return (
            <>
                <div className='Form' style={{ margin: 50 }}>
                    <input style={style} type='text' value={this.state.text} placeholder='Add your task' onChange={this.inputHandler} />
                    <label style={{ margin: 20, fontSize: 20 }}>
                        <input type='checkbox' checked={this.state.checked} onChange={this.inputHandler} />
                        Priority
                    </label>
                    <label style={style}>Must be done until
                        <input style={style} type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.inputHandler} />
                    </label>
                    <button onClick={this.addNewTaskHandler} style={{ margin: 20, fontSize: 20 }}>Add task</button>
                </div>
                <hr />
            </>
        );
    }
}

export default AddTask;