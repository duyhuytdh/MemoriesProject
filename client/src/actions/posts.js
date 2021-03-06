import * as api from '../api';

// Action creators
export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        return dispatch({ type: 'FETCH_ALL', payload: data})   

    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        return dispatch({ type: 'CREATE', payload: data})   

    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        return dispatch({ type: 'UPDATE', payload: data})   

    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        return dispatch({ type: 'DELETE', payload: id})   

    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        return dispatch({ type: 'LIKE_POST', payload: data})   

    } catch (error) {
        console.log(error.message)
    }
}