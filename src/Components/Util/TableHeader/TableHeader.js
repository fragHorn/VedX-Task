import React from 'react';
import arrow from './arrow.png';
import upArrow from './upward-arrow.png';
import classes from './TableHeader.module.css';

const tableHeader = props => {
    const sortHandler = () => {
        let order;
        if(props.orderBy === 'asc')
            order = 'desc';
        else
            order = 'asc';
        props.sortHandle(order);
    }

    return (
        <div className = {classes.outerDiv}>
            <div className = {classes.orderId}>ORDER ID <img src = {arrow} alt = 'arrow' height = '12px' width = '12px'/></div>
            <div className = { classes.name}>CUSTOMER <img src = {arrow} alt = 'arrow' height = '12px' width = '12px'/></div>
            <div className = {classes.address}>ADDRESS <img src = {arrow} alt = 'arrow' height = '12px' width = '12px'/></div>
            <div className = {classes.product}>PRODUCT <img src = {arrow} alt = 'arrow' height = '12px' width = '12px'/></div>
            <div className = {classes.date} onClick = {sortHandler}>Date Order <img src = {props.orderBy === 'asc' ? arrow : upArrow} alt = 'arrow' height = '12px' width = '12px'/></div>
            <div className = {classes.status}>STATUS <img src = {arrow} alt = 'arrow' height = '12px' width = '12px'/></div>
        </div>
    );
}

export default tableHeader;