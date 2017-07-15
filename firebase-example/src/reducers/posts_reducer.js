import _ from 'lodash';
import {
    FETCH_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST
} from '../actions/types';

export default function postsReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return action.payload;
        case CREATE_POST:
        case UPDATE_POST:
            return { ...state, ...action.payload };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}