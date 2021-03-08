import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 1000,
      margin:'20px',
      display: 'inline-block',
      boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 4%)',
      textAlign: 'left',
    },
    title: {
      fontSize: 20,
      color: '#000',
    }
  });