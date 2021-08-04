// ===== User Reducer

const initialState = {
	fullName: ''
};

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_NAME': {
			return {
				...state,
				[action.payload.name]: action.payload.value
			}
		}

		default: {
			return {
				...state
			}
		}
	}
};

export default userReducer;