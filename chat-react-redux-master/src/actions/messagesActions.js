export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';


export const addNewMessage = (user, message, date) => {
    return ({
        type: ADD_NEW_MESSAGE,
        payload: {
            user: user,
            message: message,
            date: date,
        }
    });
}