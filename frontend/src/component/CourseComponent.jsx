import React, { useEffect, useState } from "react";
import CourseDataService from "../service/CourseDataService";
import { Field, Form, Formik, ErrorMessage } from "formik";

const INSTRUCTOR = "nguyentrinhan"


export const CourseComponent = (props) => {
    const [state, setState] = useState({
        id: props.match.params.id,
        description: ''
    })

    const refreshCourse = () => {
        if (state.id == -1) {
            return
        }
        CourseDataService.retrieveCourse(INSTRUCTOR, state.id)
            .then(response => setState({
                id: response.data.id,
                description: response.data.description
            }))
    }


    useEffect(
        () => {
            refreshCourse()
        }
    )

    const onSubmit = (values) => {
        console.log("submit")
        let username = INSTRUCTOR
        let course = {
            id: state.id,
            description: values.description
        }
        if (state.id === -1) {
            CourseDataService.createCourse(username, course).then(
                () => props.history.push('/courses')
            )
        } else {
            CourseDataService.updateCourse(username, id, course).then(
                () => props.history.push('/courses')
            )
        }
    }

    const validate = values => {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 Characters in Description'
        }
        return errors
    }

    let { id, description } = state
    return (
        <div>
            <h3>Course</h3>
            <div className="container">
                <Formik
                    initialValues={{ id, description }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    enableReinitialize={true}
                >
                    {
                        () => (
                            <Form>
                                <ErrorMessage name="description" component="div"
                                    className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}