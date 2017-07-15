import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostItem extends Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(id) {
        const id = this.props.id;
        this.props.deletePost(id);
    }

    render() {

        const id = this.props.id;

        return (
            <li key={id} className="list-group-item">
                { this.props.post }
                <button
                    className="btn btn-danger right"
                    onClick={this.onDeleteClick}>
                    Delete
                </button>
            </li>
        );

    }

}

export default connect(null, actions)(PostItem);
