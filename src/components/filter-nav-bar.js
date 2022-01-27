import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FilterByLabel } from './filters/filter-by-label';
import { FilterByAssignee } from './filters/filter-by-assignee';
import { SortNewestOrOldest } from './filters/sort-newest-or-oldest';
import Button from '@mui/material/Button';
import { useStyles } from '../style';

export const FilterNavBar = ({ issues, setSorting }) => {
  const [selectedFilter, setSelectedFilter] = useState(false);

  const classes = useStyles();


  return (
    <Grid >
      <Grid item>
        <FilterByLabel issues={issues} setSorting={setSorting} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </Grid>
      {/* <Grid item>
        <FilterByAssignee issues={issues} />
      </Grid>
      <Grid  item>
        <SortNewestOrOldest issues={issues} />
      </Grid> */}
      <div className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => { setSelectedFilter(true) }}
          // disabled={!selectAll}
        >
          Filter
        </Button>
      </div>
    </Grid>
  )
}