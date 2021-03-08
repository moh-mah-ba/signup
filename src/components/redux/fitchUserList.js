import axios from 'axios';
import { LOAD_USER } from'./actionTypes';

export const fitchUserList = () => Dispatch => {
    axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            return Dispatch({
                type: LOAD_USER,
                payload: res.data
            })
        }).catch(error => console.log('error here', error))
}