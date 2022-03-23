import React from 'react';

const customers = props => {
    return(
        <div className = 'customer'>
            <div className = 'orderid'>
                {props.order_id}
            </div>
            <div className = 'name'>
                {props.customer}
            </div>
            <div className = 'address'>
                {props.country}
                <br/>
                {props.address}
            </div>
            <div className = 'product'>
                {props.product_title}
                <br/>
                {props.product_description}
            </div>
            <div className = 'date'>
                {props.date}
            </div>
            <div className = 'status'>
                {props.status}
            </div>
        </div>
    );
};

export default customers;