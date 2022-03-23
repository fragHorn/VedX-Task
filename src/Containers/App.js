import React, { Component } from 'react';
import axios from 'axios';
import classes from './App.module.css';
import CustomerList from './CustomerList/CustomerList';
import Filter from '../Components/Util/FilterItem/Filter';
import SearchInput from '../Components/Util/SearchInput/SearchInput';

class App extends Component {
  state = {
    customers : [],
    searchQuery: "",
    sortByDate: false,
    orderBy: "asc",
    statuses: ['Filter'],
    selectedStatus: "",
  }

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/Ved-X/assignment/orders')
    .then(res => {
      const cust = [...res.data];
      const status = [...this.state.statuses];
      cust.map(customer => {
        let found = false;
        for(let i = 0;i<status.length;i++){
          if(status[i] === customer.status){
            found = true;
            break;
          }
        }
        if(!found)
          status.push(customer.status);
      })
      this.setState({statuses: status});
      this.setState({customers: cust});
    })
    .catch( err => console.log(err));
  }

  searchHandler = (event) => {
    const query = event.target.value;
    this.setState({searchQuery: query});
  }

  setStatusHandler = event => {
    this.setState({selectedStatus: event.target.value});
  }

  sortHandler = order => {
    this.setState({sortByDate: true});
    this.setState({orderBy: order}); 
  }

  setShowingState = number => {
    this.setState({showing: number});
  }

  render(){
    return(
      <div className = {classes.main}>
        <div className = {classes.searchContainer}>
          <SearchInput search = {this.searchHandler} value = {this.state.searchQuery}/>
          <Filter status = {this.state.statuses} setStatus = {this.setStatusHandler}/>
        </div>
        <CustomerList 
          data = {this.state.customers} 
          query = {this.state.searchQuery}
          sort = {this.state.sortByDate}
          orderBy = {this.state.orderBy}
          status = {this.state.selectedStatus}
          sortHandle = {this.sortHandler}/>
      </div>
    );
  }
};

export default App;
