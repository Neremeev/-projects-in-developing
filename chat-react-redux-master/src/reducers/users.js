import {
    ADD_NEW_USER,
} from '../actions/usersActions'

const initialState = ["@Petya", "@Vanya", "@Vasya"];


export default function users(state = initialState, action) {
    switch (action.type) {

        case ADD_NEW_USER:
            return state.concat(action.payload)

        default:
            return state;
    }
}