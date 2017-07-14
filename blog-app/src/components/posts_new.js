import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends Component {

    // Form states:
    // pristine - no input has been touched
    // touched - user has selected or focused a field
    // invalid -
    renderField(field) {

        const { meta: { pristine, touched, invalid, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {
                    console.log({
                        label : field.label,
                        pristine: pristine,
                        touched: touched,
                        invalid: invalid,
                    })
                }
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        )
    }

    onFormSubmit(values) {
        this.props.createPost(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
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

// This function will be called during some parts of the lifecycle of the form
// It is passed in config object to reduxFrom
function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if(!values.title) {
        errors.title = "Enter a title!";
    } else {
        if(values.title.length < 3) {
            errors.title = "Title should have at least 3 !";
        }
    }



    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if(!values.content) {
        errors.content = "Enter some content please!";
    }



    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm', // Name of the form
    validate
})
(
    connect(null, { createPost })(PostsNew)
);
