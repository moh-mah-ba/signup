import { LOAD_USER } from'./actionTypes';
import { ADD_USER } from'./actionTypes';
import {DETAILS} from '../redux/actionTypes';

const initialState = {
    users: [],
    newUser: [],
    detailsUser:[]

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case (LOAD_USER):
            let loadUser = { ...state, users: [...action.payload.data]}
            return loadUser
            break;
         case (ADD_USER):
            let addNewUser = { ...state , newUser: [...state.newUser , action.payload.values]}
            return addNewUser
            break;
           case DETAILS:
                let showDetails = {...state , detailsUser:[ action.payload]}
                return showDetails
                break;
        default:
            return state
    }
}
export default reducer