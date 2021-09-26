import React from "react";

// material ui imports
import { Typography, Box } from "@material-ui/core";

// custom components
import RatingDescription from "./RatingDescription";

const TopRatingSection = prop => {
  const { ratings } = prop;

  return (
    <>
      <Typography variant="h6">Your Top-Rated Intelligences</Typography>
      <Box mt={1}>
        <Typography variant="body1" align="justify">
          These are your most dominant attributes or the skills that you excel
          and get interested the most. This is based on the ratings that you got
          from the assessment, with a range of 5.00 (highest) to 1.00 (lowest).
        </Typography>
      </Box>

      <Box mt={2}>
        {// map through the rating values
        ratings.map(rate => {
          return (
            <RatingDescription key={rate[0]} name={rate[0]} rating={rate[1]} />
          );
        })}
      </Box>
    </>
  );
};

export default TopRatingSection;
