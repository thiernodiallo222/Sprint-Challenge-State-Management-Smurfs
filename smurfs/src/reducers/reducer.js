import { FETCHING_START, FETCHING_SUCCESS, ADDING_DATA, FETCHING_FAILURE } from '../components/actions/index';

export const initialState = {
    isFetching: false,
    error: '',
  smurfs: [
    
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
  ],
  isFetched: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        isFetched: true
      }
    case FETCHING_FAILURE:
      return {
        ...state,
        error: action.payload
      }
  }
};
