import { FETCHING_START, FETCHING_SUCCESS, ADDING_DATA_START, ADDING_DATA_SUCCESS, ADDING_DATA_FAILURE } from '../components/actions/index';

export const initialState = {
    isFetching: false,
    error: '',
    smurfs: [],
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
      };
    case ADDING_DATA_START:
      return {
        ...state,
        error: ''
      };
     case ADDING_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case ADDING_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
