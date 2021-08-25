import { getPosts, getTodos, getUsers } from "../api";
import { SET_POSTS, SET_TODOS, SET_USERS } from "./types";

const setUsers = async (dispatch) => {
    const res = await getUsers();
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

const setTodos = async (dispatch) => {
    const res = await getTodos();
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

const setPosts = async (dispatch) => {
    const res = await getPosts();
    if (res.success) {
        const action = { type: SET_POSTS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

export { setUsers, setTodos, setPosts };