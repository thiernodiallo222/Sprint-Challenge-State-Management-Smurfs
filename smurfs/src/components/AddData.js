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
<<<<<<< HEAD
      
=======
            {/* <AddButton AddSmurf={props.AddSmurf} user={user} />  */}
         
>>>>>>> a5fb833e3bcfd14f28aea112e9dcdb7253c11b51
            <div>
                <form onSubmit={() => props.AddSmurf(user)} >
                    
       
                    <input className="input-form"
                        type="text" name="name"
                        placeholder="NAME"
                        value={user.name}
<<<<<<< HEAD
                        onChange={handleChange} />
=======
                       onChange={handleChange} />
>>>>>>> a5fb833e3bcfd14f28aea112e9dcdb7253c11b51
           
                
       
         
                    <input className="input-form"
                        type="text" name="age" value={user.age}
                        placeholder="AGE"
                        onChange={handleChange} />             
            
            
      
                    <input className="input-form" type="text"
                        name="height" value={user.height}
                        placeholder="HEIGHT"
                        onChange={handleChange} />
<<<<<<< HEAD
=======
                       <button type="submit">Submit</button>
>>>>>>> a5fb833e3bcfd14f28aea112e9dcdb7253c11b51
                    
        </form> 
            </div>
        <AddButton AddSmurf={props.AddSmurf} user={user} /> 
      </div>  
    )
}

const mapStateToProps = state => {
<<<<<<< HEAD
    return { state }
=======
    return {state}
>>>>>>> a5fb833e3bcfd14f28aea112e9dcdb7253c11b51
}
const mapDispatchToProps = {
    AddSmurf
};

export default connect(mapStateToProps, mapDispatchToProps)(AddData);

