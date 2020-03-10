import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING_DATA = "ADDING_DATA";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_START });
    axios
        .get("http://localhost:3333/smurfs")
        
        .then(res => {
            console.log(res.data);
           
            dispatch({ type: FETCHING_SUCCESS, payload: res.data });

        })
        .catch(err => {
            console.log("err", err);
            dispatch({
                type: FETCHING_FAILURE,
                payload: `error, failed to fetch`
            });
        })
};

export const AddSmurf = (newSmurf) => dispatch => {
    dispatch({ type: ADDING_DATA })
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then((response) => {
        console.log(newSmurf);
  console.log(response)
        })
        .catch(err => {
            console.log(`an error occurred !`);
        });   
}