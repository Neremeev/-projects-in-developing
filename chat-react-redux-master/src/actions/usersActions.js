export const ADD_NEW_USER = 'ADD_NEW_USER';


export const addNewUser = (userName) => {
    return ({
        type: ADD_NEW_USER,
        payload: userName
    });
}


/*
//redux-thunk
export const addNewUser = () => {
	const username = `@${faker.internet.userName().toLowerCase()}`
	return dispatch => {
		dispatch({
			type: 'ADD_NEW_USER',
			username
		})

		dispatch(newMessage(
			username,
			'Hello guys..',
			Date.now()
		))
	}
}
*/