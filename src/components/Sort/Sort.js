import React from 'react';
import './Sort.css';

const Sort = (props) => {

    const options = props.sortOptions.map(option => (
        <option key={option.name} selected={option.selected} value={option.method}>{option.name}</option>
    ));

    return (
        <div className='Sort'>
            <label>Sort by</label>
            <select onChange={(e, name = props.selectName) => props.select(e.target.value, name)}>
                {options}
            </select>
        </div>
    );
}

export default Sort;