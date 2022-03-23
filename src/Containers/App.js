import React, { Component } from 'react';
import axios from 'axios';
import CustomerList from './CustomerList/CustomerList';
import Filter from '../Components/Util/FilterItem/Filter';
import TableHeader from '../Components/Util/TableHeader/TableHeader';
import SearchInput from '../Components/Util/SearchInput/SearchInput';

class App extends Component {
  state = {
    customers : [],
    searchQuery: "",
    sortByDate: false,
    orderBy: "asc",
    statuses: ['Filter'],
    selectedStatus: ""
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

  render(){
    return(
      <div>
        <div>
          <SearchInput search = {this.searchHandler} value = {this.state.searchQuery}/>
          <Filter status = {this.state.statuses} setStatus = {this.setStatusHandler}/>
        </div>
        <TableHeader/>
        <CustomerList 
          data = {this.state.customers} 
          query = {this.state.searchQuery}
          sort = {this.state.sortByDate}
          orderBy = {this.state.orderBy}
          status = {this.state.selectedStatus}/>
      </div>
    );
  }
};

export default App;
