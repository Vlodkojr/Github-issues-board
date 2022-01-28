import { Card, CardContent, Typography, Container, Paper } from '@mui/material';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useStyles } from '../style';

export const MoreDetails = (details) => {
  const classes = useStyles();
  const issue = details.details;

  return (
    <Container>
      <Card className={classes.list}>
        <CardContent>
          <Typography className={classes.listContainer}>
            <div>
              <div>{`Title: ${issue.title}`}</div>
              <div>{`Label: `}
                {issue.labels?.map((label) => {
                  return <Chip key={label?.id} label={label?.name} style={{ backgroundColor: `#${label.color}` }} />
                })}
              </div>
              <div>{'Assignee: '}
                {issue.assignees?.map((assignee) => {
                  return <span key={assignee.id}>{assignee.login}</span>
                })}
              </div>
              <div>{`Number of comments: ${issue.comments}`}</div>
              <div>{`Status: ${issue.state}`}</div>
              <div>{`Body: `}
                <Paper style={{ padding: "1em" }}>{issue.body}</Paper>
              </div>
            </div>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                component={Link} to={"/"}
              >
                Back
              </Button>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}