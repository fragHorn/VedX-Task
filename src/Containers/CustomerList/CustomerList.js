import React, { Component } from 'react';
import classes from './CustomerList.module.css';
import TableHeader from '../../Components/Util/TableHeader/TableHeader';
import Customers from '../../Components/Customers/Customers';

class CustomerList extends Component{
    sortIncreasing = (data) => {
        return data.sort((a, b) => {
            const date_a = a.date.split('/');
            const date_b = b.date.split('/');
            console.log(date_a);
            const datea = new Date(Number(date_a[2]), Number(date_a[1]), Number(date_a[0]));
            const dateb = new Date(Number(date_b[2]), Number(date_b[1]), Number(date_b[0]));
            console.log(datea, dateb);
            return datea - dateb;
        });
    }

    sortDecreasing = (data) => {
        return data.sort((a, b) => {
            const date_a = a.date.split('/');
            const date_b = b.date.split('/');
            return new Date(Number(date_a[2]), Number(date_a[1]), Number(date_a[0])) > new Date(Number(date_b[2]), Number(date_b[1]), Number(date_b[0]));
        });
    }
    render(){
        let customers = null, matchedCustomers = null;

        if(this.props.data){
            matchedCustomers = this.props.data.filter( customer => {
                return customer.customer.toLowerCase().includes(this.props.query.toLowerCase());
            })
            matchedCustomers = matchedCustomers.filter(customer => {
                return customer.status.includes(this.props.status) || (this.props.status === 'Filter');
            })
        }

        if(this.props.sort){
            if(this.props.orderBy === 'asc')
                matchedCustomers = matchedCustomers.sort((a, b) => {
                    const date_a = a.date.split('/');
                    const date_b = b.date.split('/');
                    const datea = new Date(Number(date_a[2]), Number(date_a[1]), Number(date_a[0]));
                    const dateb = new Date(Number(date_b[2]), Number(date_b[1]), Number(date_b[0]));
                    return datea - dateb;
                });
            else
                matchedCustomers = matchedCustomers.sort((a, b) => {
                    const date_a = a.date.split('/');
                    const date_b = b.date.split('/');
                    const datea = new Date(Number(date_a[2]), Number(date_a[1]), Number(date_a[0]));
                    const dateb = new Date(Number(date_b[2]), Number(date_b[1]), Number(date_b[0]));
                    return dateb - datea;
                });
        }
        // console.log(matc)
        customers = matchedCustomers.map(customer => {
            return <Customers 
                key = {customer.order_id}
                {...customer}
            />}
        );


        return(
            <div className = {classes.outerDiv}>
                <TableHeader 
                    sortHandle = {this.props.sortHandle}
                    orderBy = {this.props.orderBy}/>
                {customers}
            </div>
        );
    }
}

export default CustomerList;