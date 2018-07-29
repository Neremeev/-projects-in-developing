import {
    ADD_NEW_MESSAGE,
} from '../actions/messagesActions'

import {
    ADD_NEW_USER,
} from '../actions/usersActions'

const initialState = [
    {
        message: 'Здорова, парни!',
        date: 1486912946322,
        user: '@lexa'
    },
    {
        message: 'Здорова, леха',
        date: 1486912996322,
        user: '@maks'
    },
]

export default function messages(state = initialState, action) {
    switch (action.type) {

        case ADD_NEW_MESSAGE:
            return state.concat({
                message: action.payload.message,
                date: action.payload.date,
                user: action.payload.user
            })

        case ADD_NEW_USER:
            return state.concat({
                message: 'Здорова, мужики!',
                date: Date.now(),
                user: action.payload,
            })

        default:
            return state;
    }
}
