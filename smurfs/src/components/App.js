import React, { Component } from "react";
import "./App.css";
import { Provider, connect } from 'react-redux';
import { getData } from './actions/index';
import { state } from '../reducers/reducer'


const App = (props) => {
  return (
    <div>
        <ElementList
          getData={props.getData}
          isFetching={props.isFetching}
          error={props.error}
          smurfs={props.smurfs}
          isFetched={props.isFetched} />
        
    </div>
  )
}

export default App



const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    smurfs: state.smurfs,
    isFetched: state.isFetched
  }
}
const mapDispatchToProps = {
  //just return list of action creators here.
  getData
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
