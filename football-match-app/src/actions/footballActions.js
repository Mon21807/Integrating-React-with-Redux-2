// src/actions/footballActions.js

export const FETCH_FOOTBALL_REQUEST = 'FETCH_FOOTBALL_REQUEST';
export const FETCH_FOOTBALL_SUCCESS = 'FETCH_FOOTBALL_SUCCESS';
export const FETCH_FOOTBALL_FAILURE = 'FETCH_FOOTBALL_FAILURE';

export const fetchFootballRequest = () => ({
  type: FETCH_FOOTBALL_REQUEST
});

export const fetchFootballSuccess = (matches) => ({
  type: FETCH_FOOTBALL_SUCCESS,
  payload: matches
});

export const fetchFootballFailure = () => ({
  type: FETCH_FOOTBALL_FAILURE
});

export const fetchFootballMatches = (page = 1) => {
  return async (dispatch) => {
    dispatch(fetchFootballRequest());
    try {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`);
      const data = await response.json();
      dispatch(fetchFootballSuccess(data.data));
    } catch (error) {
      dispatch(fetchFootballFailure());
    }
  };
};
