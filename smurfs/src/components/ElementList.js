import React from 'react'
import ElementCard from './ElementCard';
import { connect } from 'react-redux';
import { getSmurfs, AddSmurf } from './actions/index';
import './Style.css';
import { state } from '.././reducers/reducer';

const ElementList = ({isFetching, error, smurfs, isFetched, getSmurfs}) => {
  // console.log(props);

  if (isFetching) {
    return <h3>Smurf is fetching ... :)</h3>
  } else if (error) {
    return <h3>{error}</h3>
  } else {
    return <div>
      <button className="button" onClick={() => getSmurfs()}>GET SMURF </button>
    
      {smurfs.map((element, index) =>
        <ElementCard
          id={index}
          isFetching={isFetching}
          error={error}
          isFetched={isFetched}
          smurfs={smurfs}
          element={element}
                    
        />)} </div>
  }
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    smurfs: state.smurfs,
    isFetched: state.isFetched,
    name: state.smurfs.name,
    age: state.smurfs.age,
    height: state.smurfs.height
  
  }
};

  
const mapDispatchToProps = {
  //just return list of action creators here.
  getSmurfs,
  AddSmurf
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ElementList);

    

