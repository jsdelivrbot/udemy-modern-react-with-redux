import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, this.renderPost);
    }

    renderPost(post) {
        return (
            <li key={post.id} className="list-group-item">
                <div>Id: { post.id }</div>
                <div>Title: { post.title }</div>
                <div>Categories: { post.categories }</div>
                <div>Content: { post.content }</div>
            </li>
        )

    }

    render() {

        // console.log("Posts: " + JSON.stringify(this.props.posts));

        return (
            <div>
                <div className="text-xs-right">
                    <Link
                        className="btn btn-primary"
                        to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        )

    }

}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);