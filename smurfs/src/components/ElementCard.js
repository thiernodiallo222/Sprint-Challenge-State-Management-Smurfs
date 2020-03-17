import React from 'react'
import './Style.css';



const ElementCard = (props) => {
   
    return (
        <div>    
                <p> NAME: {props.element.name} </p>
                <p> ID: {props.element.id} </p>
                <p> AGE: {props.element.age} </p>
                <p> HEIGHT: {props.element.height} </p> 
        </div>
    )
    }   

export default ElementCard;



