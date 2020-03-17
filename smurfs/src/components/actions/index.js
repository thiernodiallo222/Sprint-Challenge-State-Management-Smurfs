import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING_DATA_START = "ADDING_DATA_START";
export const ADDING_DATA_SUCCESS = "ADDING_DATA_SUCCESS";
export const ADDING_DATA_FAILURE = "ADDING_DATA_FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_START });
    axios
        .get("http://localhost:3333/smurfs")
        
        .then(res => {
            console.log(res.data);
           
            dispatch({ type: FETCHING_SUCCESS, payload: res.data });

        })
        .catch(err => {
            dispatch({
                type: FETCHING_FAILURE,
                payload: err
            });
        })
};

export const AddSmurf = newSmurf => dispatch => {
    dispatch({
                type: ADDING_DATA_START
            })
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then((response) => {
            console.log(response)
            dispatch({
                type: ADDING_DATA_SUCCESS,
                payload: newSmurf
            })
            console.log(newSmurf);
            console.log(response)
        })
        .catch(err => {
            dispatch({
                type: ADDING_DATA_FAILURE,
                payload: 'Error to add Data'
            });
        });   
}