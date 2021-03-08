import React from 'react';
import { useSelector } from 'react-redux';
import {
    Card,
    CardActions,
    CardContent,
    Typography
} from '@material-ui/core';
import { useStyles } from './UsersDetailsStyle';


const UsersDetails = () => {

    const userDetails = useSelector(state => {
        return state.reducer.detailsUser
    })

    const classes = useStyles();
    
    return (
        <div>
            {userDetails.map((item, index) => {
                return(
                    <Card className={classes.root} key={index}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            {`Name: ${item.first_name} ${item.last_name}`} 
                        </Typography>
                        <Typography className={classes.title}>
                            {`Age: ${item.age}`}
                        </Typography>
                        <Typography className={classes.title}>
                            {`Email: ${item.email}`}
                        </Typography>
                        <Typography className={classes.title}>
                            {`Gender: ${item.gender}`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>    
                )
            })} 
        </div>
    )
}

export default UsersDetails