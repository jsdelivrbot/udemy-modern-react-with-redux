import { FETCH_POSTS } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, i => i.id);
        default:
            return state;
    }
}