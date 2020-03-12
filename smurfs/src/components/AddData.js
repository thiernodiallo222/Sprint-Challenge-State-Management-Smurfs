import React, { useState } from 'react'
import { connect } from 'react-redux';
import { AddSmurf } from './actions/index';
// import AddButton from './AddButton';
import './Style.css';



  
const AddData = (props) => {

    const [user, setUser] = useState({ name: "", age: "", height: "" });

    const handleChange = event => {
        event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

    return (
        <div className="add-and-retrieve">
            {/* <AddButton AddSmurf={props.AddSmurf} user={user} />  */}
         
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
                       <button type="submit">Submit</button>
                    
        </form> 
            </div>
            
        
      </div>  
    )
}

const mapStateToProps = state => {
    return {state}
}
//  const mapDispatchToProps = {
//     AddSmurf
//     }

export default connect(mapStateToProps, { AddSmurf })(AddData);

