import axios from 'axios'
import {LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from './type'

const loadApiComments = () => {
    return {
        type: LOAD_COMMENTS
    }
}

const loadCommentsSuccess = comments => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

const loadCommentsError = error => {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}

export const apiCall = () => {
    return dispatch => {

        dispatch(loadApiComments())

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            dispatch(loadCommentsSuccess(res.data))
        })
        .catch( err => {
            dispatch(loadCommentsError(err.message))
        })
    }
}