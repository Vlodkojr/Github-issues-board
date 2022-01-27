import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStyles } from './style';
import { ListOfIssues } from './components/list-of-issues';
import { HeaderInput } from './components/header-input';
import { FilterNavBar} from './components/filter-nav-bar';

function App() {
  const [issues, setIssues] = useState(null);
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [showIssues, setShowIssues] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [sorting, setSorting] = useState(null);
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

  return (
    <BrowserRouter>
      <div className={classes.general}>
        <main className={classes.wrapper}>
          <HeaderInput
            owner={owner}
            setOwner={setOwner}
            repo={repo}
            setRepo={setRepo}
            showIssues={showIssues}
            setShowIssues={setShowIssues}
            selectAll={selectAll} />
          {/* <FilterNavBar issues={issues}/> */}
          {showIssues && issues ? (
            <>
            <FilterNavBar issues={issues} setSorting={setSorting} />
            <ListOfIssues issues={sorting ? sorting : issues} />
            </>
          ) : null}
        </main>
        <footer id='footer' className={classes.footer}>
          <p className={classes.footerParagraph}>© 2022 Created by Volodymyr Romanovskyi Email: volodymyrrom1@gmail.com</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
