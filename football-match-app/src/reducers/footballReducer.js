// src/reducers/footballReducer.js

import {
    FETCH_FOOTBALL_REQUEST,
    FETCH_FOOTBALL_SUCCESS,
    FETCH_FOOTBALL_FAILURE
  } from '../actions/footballActions';
  
  const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: []
  };
  
  const footballReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FOOTBALL_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case FETCH_FOOTBALL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          footballMatches: action.payload
        };
      case FETCH_FOOTBALL_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        return state;
    }
  };
  
  export default footballReducer;
  