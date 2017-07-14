import {combineReducers} from 'redux';
import PostsReducter from './posts.reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducter,
    form: formReducer
});

export default rootReducer;
