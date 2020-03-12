import React from "react";
import "./App.css";
import ElementList from './ElementList';
import AddData from './AddData';



const App = (props) => {
  return (
    <div className="app">
      <AddData className ="elements"/>
      <ElementList className ="elements" />    
      
    </div>
  )
}

export default App;


