import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FilterByLabel } from './filter-by-label';
import { useStyles } from '../../style';

export const FilterNavBar = ({ issues, setSorting }) => {
  const [selectedFilter, setSelectedFilter] = useState(false);

  const classes = useStyles();

  return (
    <Grid >
      <Grid item>
        <FilterByLabel issues={issues} setSorting={setSorting} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </Grid>
      <div className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => { setSelectedFilter(true) }}
        >
          Filter
        </Button>
      </div>
    </Grid>
  )
}