import { useStyles } from './../style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const HeaderInput = ({ owner, setOwner, repo, setRepo, showIssues, setShowIssues, selectAll }) => {
  const classes = useStyles();

  const handleChangeOwner = (event) => {
    setOwner(event.target.value);
    if (showIssues) {
      setShowIssues(false);
    }
  };

  const handleChangeRepo = (event) => {
    setRepo(event.target.value);
    if (showIssues) {
      setShowIssues(false);
    }
  };

  return (
    <div>
      <h1 className={classes.label}>Github issues board</h1>
      <div className={classes.input}>
        <div className={classes.formControl}>
          <TextField
            id="Owner"
            label="Owner"
            value={owner}
            variant="outlined"
            onChange={handleChangeOwner}
          />
        </div>
        <TextField
          id="Repository name"
          label="Repository name"
          value={repo}
          variant="outlined"
          onChange={handleChangeRepo}
        />
      </div>
      <div className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => { setShowIssues(true) }}
          disabled={!selectAll}
        >
          Show issues
        </Button>
      </div>
    </div>
  )
}