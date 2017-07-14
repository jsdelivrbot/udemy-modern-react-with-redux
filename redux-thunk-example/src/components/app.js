import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser({
        id,
        name,
        email
    }) {
        return (
            <li key={id} className="list-group-item">
                <span className="pull-xs-right">
                    <a href={email}>{email}</a>
                </span>
                { name }
            </li>
        )
    }

    render() {
        return (
            <div>
                <h4>Email Directory</h4>
                <ul className="list-group">
                    { this.props.users.map(this.renderUser) }
                </ul>
            </div>
        );
    }
}

export default connect(state => state, actions)(App);