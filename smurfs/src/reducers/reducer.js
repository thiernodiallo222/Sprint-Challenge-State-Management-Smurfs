import { FETCHING_START, FETCHING_SUCCESS, ADDING_DATA } from '../components/actions/index';

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
        smurfs: [...state.smurfs,
        ...action.payload],
        isFetched: true
      };
     case ADDING_DATA:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }
    default:
      return state;
  }
};
