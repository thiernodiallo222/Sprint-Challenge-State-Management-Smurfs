import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILUREM } from '../components/actions/index';

const initialState = {
    isFetching: false,
    error: '',
    smurfs: [],
    isFetched: false
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
          smurfs: [...state.smurfs, ation.payload],
        isFetched: true
      };
    default:
      return state;
  }
};
