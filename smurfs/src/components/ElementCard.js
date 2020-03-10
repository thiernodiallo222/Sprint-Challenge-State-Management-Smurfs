import React from 'react'
import './Style.css';



const ElementCard = (props) => {

    return (
        <div className="smurf-card">    
           
                <p> {props.isFetching} </p>
                <p> {props.error} </p>
                <p> {props.isFetched} </p>
                <p> Name: {props.name} </p>
                <p> Age: {props.age} </p>
                <p> height: {props.height} </p>
                <p> ID: {props.id} </p>
           
        </div>
    )
}

export default ElementCard 



