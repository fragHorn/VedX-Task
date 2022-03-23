import React from 'react';
import classes from './Customer.module.css';

const customers = props => {
    return(
        <div className = {classes.customer}>
            <div className = {classes.orderId}>
                {props.order_id}
            </div>
            <div className = {classes.name}>
                {props.customer}
            </div>
            <div className = {classes.address}>
                {props.country}
                <span style = {{'color': 'grey', 'marginTop': '5px', 'display': 'block'}}>{props.address}</span>
            </div>
            <div className = {classes.product}>
                {props.product_title}
                <br/>
                <span style = {{'color': 'grey', 'marginTop': '5px', 'display': 'block'}}>{props.product_description}</span>
            </div>
            <div className = {classes.date}>
                {props.date}
            </div>
            <div className = {`${classes[props.status]} ${classes.status}`}>
                {props.status}
            </div>
        </div>
    );
};

export default customers;