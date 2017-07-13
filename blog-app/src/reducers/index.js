import { combineReducers } from 'redux';
import PostsReducter from './posts.reducer';

const rootReducer = combineReducers({
  posts: PostsReducter
});

export default rootReducer;
