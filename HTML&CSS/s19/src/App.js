import logo from './logo.svg';
import './App.css';
import React from "react";
import Controlled from './controlled';
import Uncontrolled from './uncontrolled'


class App extends React.Component{
  render(){
    return(
      <div>
  <Controlled />
  <Uncontrolled />
  </div>
    );
  }
}


export default App;
