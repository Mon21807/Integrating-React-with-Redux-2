// src/components/FootballMatches.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFootballMatches } from '../actions/footballActions';
import { Box, Button, Spinner } from '@chakra-ui/react';

function FootballMatches() {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector(state => state.football);

  useEffect(() => {
    dispatch(fetchFootballMatches());
  }, [dispatch]);

  const handleLoadMore = () => {
    // Implement pagination logic here
    // For simplicity, let's assume we're loading the next page on button click
    // You may need to track the current page and handle pagination accordingly
  };

  return (
    <div>
      <h2>Football Matches</h2>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>Error occurred while fetching data.</div>
      ) : (
        <div>
          {footballMatches.map(match => (
            <Box key={match.id} p={4} borderWidth="1px" borderRadius="md">
              <p>{match.home_team} vs {match.away_team}</p>
              <p>{match.date}</p>
              <p>{match.time}</p>
            </Box>
          ))}
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
}

export default FootballMatches;
