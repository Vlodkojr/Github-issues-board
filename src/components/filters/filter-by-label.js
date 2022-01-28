import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useStyles } from '../../style';

export const FilterByLabel = ({ issues, setSorting, selectedFilter, setSelectedFilter }) => {
  const [newIssues, setNewIssues] = useState('')
  const classes = useStyles();

  const selectHandler = (e) => {
    const { value } = e.target;
    const result = issues.filter((issue) => {
      return issue.labels?.find((label) => label?.name === value);
    });
    if (result) {
      setSelectedFilter(false);
      setNewIssues(result);
    }
  };

  useEffect(() => {
    if (newIssues && selectedFilter) {
      setSorting(newIssues);
    }
  }, [newIssues, selectedFilter])


  return (
    <div className={classes.filter}>
      <TextField
        id="filter-by-label"
        label="filter-by-label"
        variant="filled"
        onChange={selectHandler}
      />
    </div>
  )
}