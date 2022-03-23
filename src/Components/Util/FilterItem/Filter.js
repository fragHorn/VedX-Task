import React from 'react';
import classes from './Filter.module.css';

const filter = props => {
    return (
        <select className = {classes.filters} onChange={props.setStatus}>
            {props.status.map(s => {
                return <option key = {s} value = {s}>{s}</option>
            })}
        </select>
    );
}

export default filter;