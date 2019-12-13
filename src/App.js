import React, { Component } from 'react';
import './App.css';
import Robots from './components/Robots';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      robots :Robots,
      searchfield:''
       
    }
  }
  

  onSearchChange = (event) => {
    this.setState({ searchfield : event.target.value });
  
  }

  render(){
      const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className = 'tc'>
        <h1 className='f1'> Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList Robots = {filteredRobots}/>
      </div> 
    );
  }
}

export default App;
