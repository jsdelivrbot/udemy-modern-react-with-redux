// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts

import { createSelector } from 'reselect';
import _ from 'lodash';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
    const selectedPosts = _.filter(
        posts,
        post => _.contains(selectedPostIds, post.id)
    );
    return selectedPosts;
};

export default createSelector(
    postsSelector,  // Pick off a piece of state
    selectedPostsSelector,  // Pick off a piece of state
    getPosts // Last argument is a function that has our select logic
)