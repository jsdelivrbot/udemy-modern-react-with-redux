/**
 * Created by krzysztofkicinger on 16/07/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title for Post'
    },
    categories: {
        type: 'input',
        label: 'Enter some categories for this post'
    },
    content: {
        type: 'textarea',
        label: 'Post Content'
    }
};

class DynamicPostsNew extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    renderField(fieldConfig, field) {

        // console.log(`Field config: ${JSON.stringify(fieldConfig)}`);
        // console.log(`Field: ${field}`);
        // console.log(`Fields: ${this.props.fields}`);

        const fieldHelper = FIELDS[field];
        // console.log(`Field helper: ${JSON.stringify(fieldHelper)}`);

        const className = `form-group ${fieldHelper.touched && fieldHelper.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type
                    type="test"
                    className="form-control"
                    { ...fieldHelper }/>
                <div className="text-help">
                    { fieldHelper.touched ? fieldHelper.error : '' }
                </div>
            </div>
        )
    }

    onFormSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                {
                    _.map(FIELDS, (value, key) => this.renderField(value, key))
                }
                <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
                <Link
                    to="/"
                    className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        )
    }

}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if(!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });

    return errors;
}


export default reduxForm({
    form: 'PostsNewForm', // Name of the form
    fields: _.keys(FIELDS),
    validate
})
(
    connect(null, { createPost })(DynamicPostsNew)
);
