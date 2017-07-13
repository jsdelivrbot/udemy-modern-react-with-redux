import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'KK_KEY';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts`, {
        params: {
            key: API_KEY
        }
    });

    return {
        type: FETCH_POSTS,
        payload: request
    }

}