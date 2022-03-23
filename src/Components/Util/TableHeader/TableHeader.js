import React from 'react';
import arrow from './arrow.png';
import classes from './TableHeader.module.css';

const tableHeader = props => {
    return (
        <div>
            <div>ORDER ID <img src = {arrow} height = '12px' width = '12px'/></div>
            <div>CUSTOMER <img src = {arrow} height = '12px' width = '12px'/></div>
            <div>ADDRESS <img src = {arrow} height = '12px' width = '12px'/></div>
            <div>PRODUCT <img src = {arrow} height = '12px' width = '12px'/></div>
            <div>Date Order <img src = {arrow} height = '12px' width = '12px'/></div>
            <div>STATUS <img src = {arrow} height = '12px' width = '12px'/></div>
        </div>
    );
}

export default tableHeader;