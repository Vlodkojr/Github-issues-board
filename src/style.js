import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  formControl: {
    marginRight: '2em'
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0, 2%',
    '@media (max-width: 700px)': {
      flexDirection: 'column',
    },
    '& > *': {
      width: '25ch'
    },
  },
  wrapper: {
    margin: '1% 2%',
  },
  list: {
    backgroundColor: "#f5f5f5 !Important",
    margin: "10px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    margin: "2em"
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: '5%',
    opacity: '1'
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '30px',
    fontFamily: 'Helvetica',
  },
  footerParagraph: {
    color: 'white',
    fontSize: '1em',
    marginLeft: '10px',
  },
  footer: {
    bottom: 0,
    height: '5vh',
    backgroundColor: '#2E3133',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
    '@media (max-width: 370px)': {
      fontSize: '8px',
    },
  },
  general: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundImage: 'url(https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
}));