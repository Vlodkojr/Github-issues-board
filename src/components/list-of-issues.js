import { useEffect } from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@mui/material';
import Chip from '@mui/material/Chip';
// import { Link } from 'react-router-dom';
import { useStyles } from '../style';

export const ListOfIssues = ({ issues }) => {
  const classes = useStyles();
  console.log(issues)
  
  return (
    <div style={{ marginTop: "3em" }}>
      {issues.message != "Not Found" ? issues.map((issue, index) => {
        return (
          <Container
            key={index}>
            <Card className={classes.list}>
              <CardContent>
                <Typography className={classes.listContainer}>
                  <div>
                    <div>{`Title: ${issue.title}`}</div>
                    <div>{`Label: `}
                    {issue.labels?.map((label) => {
                      console.log(`${label.color}`)
                      return <Chip key={label?.id} label={label?.name} style={{backgroundColor:`#${label.color}`}} />
                    })}
                    </div>
                    <div>{'Assignee: '}
                    {issue.assignees?.map((assignee) => {
                      return <span key={assignee.id}>{assignee.login}</span>
                    })}
                    </div>
                    <div>{`Number of comments: ${issue.comments}`}</div>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Container>
        )
      }) : <h1 className={classes.heading}>No Issues</h1>}
    </div>
  )
}