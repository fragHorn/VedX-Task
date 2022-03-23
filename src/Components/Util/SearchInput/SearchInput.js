import React from 'react';
import classes from './SearchInput.module.css';

const search = props => {
    return(
        <input type = 'text' value = {props.value} onChange = {props.search}/>
    );
}

export default search;