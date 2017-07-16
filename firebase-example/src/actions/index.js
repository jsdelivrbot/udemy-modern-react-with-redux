import _ from 'lodash';
import Firebase from 'firebase';
import {
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST
} from './types';


const Posts = new Firebase('http://fbredux.firebaseio.com/');

// export function fetchPosts() {
//     return dispatch => {
//
//     }
// }

export const fetchPosts = () => (dispatch) =>
    Posts.on('value', snapshot => {
        dispatch({
            type: FETCH_POSTS,
            payload: snapshot.val()
        })
    });

export const createPost = (post) => (dispatch) => Posts.push(post);

export function deletePost(id) {
    return dispatch => Posts.child(id).remove();
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        payload: {
            [post.id]: post
        }
    }
}
