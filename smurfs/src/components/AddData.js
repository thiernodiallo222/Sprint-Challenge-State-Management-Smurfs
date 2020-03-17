import React, { useState } from 'react'
import { connect } from 'react-redux';
import { AddSmurf } from './actions/index';
import './Style.css';



  
const AddData = (props) => {

    const [user, setUser] = useState({ name: "", age: "", height: "" });

    const handleChange = event => {
        event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

    return (
        <div className="add-and-retrieve">
      
            <div>
                <form onSubmit={() => props.AddSmurf(user)} >
                    
       
                    <input className="input-form"
                        type="text" name="name"
                        placeholder="NAME"
                        value={user.name}
                        onChange={handleChange} />
           
                
       
         
                    <input className="input-form"
                        type="text" name="age" value={user.age}
                        placeholder="AGE"
                        onChange={handleChange} />             
            
            
      
                    <input className="input-form" type="text"
                        name="height" value={user.height}
                        placeholder="HEIGHT"
                        onChange={handleChange} />
                    
        </form> 
            </div>
         <button className="add-button" onClick={() => AddSmurf(user)}>Add New Sturf </button>
      </div>  
    )
}

const mapStateToProps = state => {
    return { state }
}
const mapDispatchToProps = {
    AddSmurf
};

export default connect(mapStateToProps, mapDispatchToProps)(AddData);

