import _ from 'lodash';
import {
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST
} from './types';

const INITIAL_POSTS = {
    123: 'One Wierd Trick...',
    456: 'Bet you wanted to read this'
};

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: INITIAL_POSTS
    }
}

export function createPost() {
    return {
        type: CREATE_POST,
        payload: {
            [_.uniqueId()] : post
        }
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        payload: {
            [post.id]: post
        }
    }
}
