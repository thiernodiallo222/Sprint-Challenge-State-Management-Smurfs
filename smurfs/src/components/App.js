import React from "react";
import "./App.css";
import ElementList from './ElementList';



const App = (props) => {
  return (
    <div className ="App">
        <ElementList
         getSmurfs={ props.getSmurfs }
          isFetching={ props.isFetching }
          error={ props.error }
          smurfs={ props.smurfs }
          isFetched={ props.isFetched} />     
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     isFetching: state.isFetching,
//     error: state.error,
//     smurfs: state.smurfs,
//     isFetched: state.isFetched
//   }
// }

export default App;
