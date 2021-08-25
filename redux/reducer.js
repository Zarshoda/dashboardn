import { SET_DARK, SET_POSTS, SET_TODOS, SET_TOGGLE, SET_USERS } from "./types"

const initialState = {
    users: [],
    todos: [],
    posts: [],
    isDark: false,
    isSidebarShow: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };

        case SET_POSTS:
            return { ...state, posts: action.payload };

        case SET_DARK:
            return { ...state, isDark: !state.isDark };

        case SET_TOGGLE:
            return { ...state, isSidebarShow: !state.isSidebarShow };

        default: return state;
    }
}

export default reducer;