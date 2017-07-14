/**
 * Created by krzysztofkicinger on 14/07/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params; // Gets the value of /posts/:id param
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/" className="btn btn-primary">Back to Posts</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteClick}>
                        Delete Post
                    </button>
                </div>
                <div>
                    <h3>
                        { post.title }
                    </h3>
                    <h6>
                        Categories: { post.categories }
                    </h6>
                    <p>
                        { post.content }
                    </p>
                </div>
            </div>
        )
    }

}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id] // ownProps == this.props (within component)
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);