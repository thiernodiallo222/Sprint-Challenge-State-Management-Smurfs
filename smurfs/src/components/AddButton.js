import React from 'react'
import './Style.css';


const AddButton = (props) => {
    return (
        <div> 
            <button className="add-button" onClick={() => props.AddSmurf(props.user)}>Add New Sturf </button>
        </div>
    )
}

export default AddButton;
