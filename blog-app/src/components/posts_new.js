import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    // Form states:
    // pristine - no input has been touched
    // touched - user has selected or focused a field
    // invalid -
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {
                    console.log({
                        label : field.label,
                        pristine: field.meta.pristine,
                        touched: field.meta.touched,
                        invalid: field.meta.invalid,
                    })
                }
                { field.meta.touched ? field.meta.error : '' }
            </div>
        )
    }

    onFormSubmit(values) {
        console.log(values);
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
})(PostsNew);
