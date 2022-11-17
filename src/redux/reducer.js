import { DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
    users: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };

        case DELETE_USER_SUCCESS:
            const userFilter = state.users.filter(
                (user) => user.id !== action.payload
            );
            return { ...state, users: userFilter };

        default:
            return state;
    }
};

export default rootReducer;
