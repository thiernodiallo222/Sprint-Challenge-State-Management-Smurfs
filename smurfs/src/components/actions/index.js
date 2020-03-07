// import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getData = () => dispatch => {
    // initially send the action FETCHING_START so that we
    // get our state updated to support a fetch
    dispatch({ type: FETCHING_START });
    GET`/smurfs`
        .then(res => {
            console.log("res", res);
            // send the action FETCHING_SUCCESS and update state
            // to show the fetched data
            dispatch({ type: FETCHING_SUCCESS, payload: res });

        })
        .catch(err => {
            console.log("err", err);
            // send the action FETCHING_FAILURE and update state
            // to show the error message
            dispatch({
                type: FETCHING_FAILURE,
                payload: `error, failed to fetch`
                    });
        })
    }