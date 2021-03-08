import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles({
    baisRoot:{
      display: 'inline-block',
    },
    root: {
      minWidth: 275,
      maxWidth: 275,
      padding: '15px 0',
      margin:'20px',
      display: 'inline-block',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px 10px rgb(0 0 0 / 4%)',
    },
    title: {
      fontSize: 14,
    },
    button: { 
      textTransform: 'capitalize',
    }
  })