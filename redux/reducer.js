import { SET_POSTS, SET_TODOS, SET_USERS } from "./types"

const initialState = {
    users: [],
    todos: [],
    posts: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };

        case SET_POSTS:
            return { ...state, posts: action.payload };

        default: return state;
    }
}

export default reducer;