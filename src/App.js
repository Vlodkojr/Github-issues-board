import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStyles } from './style';
import { ListOfIssues } from './components/listOfIssues';

function App() {
  const [issues, setIssues] = useState(null);
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [showIssues, setShowIssues] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const classes = useStyles();

  const api = `https://api.github.com/repos/${owner}/${repo}/issues`;

  useEffect(() => {
    if (!owner || !repo) {
      setSelectAll(false);
    }

    if (owner && repo) {
      setSelectAll(true);
    }

    if (showIssues) {
      try {
        fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            setIssues(data);
          })
      } catch (error) {
        console.log('Error :', error);
      }
    }
  }, [api, showIssues, owner, repo]);

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
    <BrowserRouter>
      <div className={classes.general}>
        <main className={classes.wrapper}>
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
          {showIssues && issues ? <ListOfIssues issues={issues} /> : null}
        </main>
        <footer id='footer' className={classes.footer}>
          <p className={classes.footerParagraph}>© 2022 Created by Volodymyr Romanovskyi Email: volodymyrrom1@gmail.com</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
