import React, { useEffect } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fitchUserList } from '../redux/fitchUserList';
import { useStyles } from './UserListStyle';
import { DETAILS } from '../redux/actionTypes';

const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fitchUserList())
    }, [dispatch])

    const users = useSelector(state => {
        return state.reducer
    })

    const classes = useStyles();

    const history = useHistory();

    const usersDetailsButton = (item) => {

        dispatch({
            type: DETAILS,
            payload: item
        })

        return (history.push(`/user/:${item.first_name} ${item.last_name}`, { from: '/userslist' }))
    }

    return (
        <div className={classes.baisRoot}>
            {users.users.map((item, index) => {
                    return (
                        <Card className={classes.root} key={index}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {`${item.first_name} ${item.last_name}`}
                                </Typography>
                                <br />
                                <Typography variant="body2" component="p">
                                    {item.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.button} variant="contained" color="primary" size="small" 
                                onClick={(event) => usersDetailsButton(item)}
                                >Show Details</Button>
                            </CardActions>
                        </Card>
                    )
                })}
                {users.newUser.map((item, index) => {
                    return (
                        <Card className={classes.root} key={index}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                {`${item.first_name} ${item.last_name}`}
                                </Typography>
                                <br />
                                <Typography variant="body2" component="p">
                                    {item.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.button} variant="contained" color="primary" size="small"
                                onClick={(event) => usersDetailsButton(item)}
                                >Show Details</Button>
                            </CardActions>
                        </Card>
                    )
                })}
        </div>
    )
}
export default UsersList