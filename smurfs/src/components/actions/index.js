import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const getSmurfs = () => dispatch => {
    // initially send the action FETCHING_START so that we
    // get our state updated to support a fetch
    dispatch({ type: FETCHING_START });
    axios
        .get("http://localhost:3333/smurfs")
        // http://localhost:3333/smurfs
        
        .then(res => {
            console.log(res.data);
           
            // send the action FETCHING_SUCCESS and update state
            // to show the fetched data
            dispatch({ type: FETCHING_SUCCESS, payload: res.data});

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

// getSmurfs();
    
// import axios from "axios";

// export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
// export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
// export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

// export const getQuote = () => dispatch => {
//   // initially send the action FETCHING_QUOTE_START so that we
//   // get our state updated to support a fetch
//   dispatch({ type: FETCHING_QUOTE_START });

//   axios
//     .get("https://api.kanye.rest")
//     .then(res => {
//       console.log("res", res);
//       // send the action FETCHING_QUOTE_SUCCESS and update state
//       // to show the fetched data
//       dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote });
//     })
//     .catch(err => {
//       console.log("err", err);
//       // send the action FETCHING_QUOTE_FAILURE and update state
//       // to show the error message
//       dispatch({
//         type: FETCHING_QUOTE_FAILURE,
//         payload: `${err.response.message} with response code ${
//           err.response.code
//         }`
//       });
//     });
// };
