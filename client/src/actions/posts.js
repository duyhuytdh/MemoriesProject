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

export const updatePost = (Id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(Id, post);
        return dispatch({ type: 'UPDATE', payload: data})   

    } catch (error) {
        console.log(error.message)
    }
}