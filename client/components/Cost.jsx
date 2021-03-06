import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 130,
  },
});

const Cost = ({
  handleStateChange,
  filterCostValue,
  filterEvents,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider valueLabelDisplay="auto" aria-labelledby="range-slider" value={filterCostValue} onChange={(e, v) => handleStateChange(v, 'filterCostValue', filterEvents)} />
    </div>
  );
};

export default Cost;
