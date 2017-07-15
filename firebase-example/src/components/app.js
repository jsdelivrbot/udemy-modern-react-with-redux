import React, {Component} from 'react';
import {connect} from 'react-redux'
import { PostItem } from './post_item';
import * as actions from '../actions/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    onInputChange(event) {
        this.setState({
            post: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.createPost(this.state.post);
        this.setState({
            post: {}
        });
    }

    renderAddPost() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <div className="input-group">
                    <input
                        value={ this.state.post }
                        onChange={ this.onInputChange }
                        className="form-control"
                        type="text"
                        placeholder="Enter post content here..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Add Post</button>
                    </span>
                </div>
            </form>
        )
    }

    renderPosts() {
        return (
            <ul className="list-group">
                { this.props.posts.map((id, post) => this.renderPost(id, post)) }
            </ul>
        )
    }

    renderPost(id, post) {
        return (
            <PostItem key={id} post={post} />
        )
    }

    render() {
        return (
            <div>
                {/*{ this.renderAddPost() }*/}
                {/*{ this.renderPosts() }*/}
            </div>
        )
    }

}

function mapStateToProps({posts}) {
    return { posts };
}

export default connect(mapStateToProps, actions)(App);