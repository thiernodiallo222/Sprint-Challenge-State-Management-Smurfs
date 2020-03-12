import React from 'react'
import ElementCard from './ElementCard';
import { connect } from 'react-redux';
import { getSmurfs } from './actions/index';
import './Style.css';

const ElementList = (props) => {
  console.log(props);

    if (props.isFetching) {
        return <h3>Smurf is fetching ... :)</h3>
    } else if (props.error) {
        return <h3>{props.error}</h3>
    } else {
        return  <div>
        <button className ="button" onClick={()=>props.getSmurfs()}>GET SMURF </button>

            <div>
    {
        props.smurfs.map((element, index) =>
            <ElementCard
                    id={index}
                    isFetching={props.isFetching}
                    error={props.error}
                   isFetched={props.isFetched}
                    smurfs={props.smurfs}
                    // name={element.name}
                    // age={element.age}
                    // height={element.height
                    element={element}
                    
                 />) }
             </div >
    </div>     
    }
         
}
const mapDispatchToProps = {
  //just return list of action creators here.
  getSmurfs
}

const mapStateToProps = state => {
  return {
   isFetching: state.isFetching,
    error:state.error,
    smurfs: state.smurfs,
    isFetched: state.isFetched,
    // name: state.smurfs.name,
    // age: state.smurfs.age,
    // height: state.smurfs.height
  
}   
  };

export default connect(
  mapStateToProps, mapDispatchToProps
)(ElementList);

    

