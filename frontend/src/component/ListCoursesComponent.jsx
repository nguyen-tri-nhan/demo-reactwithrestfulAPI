import React, { useEffect, useState } from "react";
import CourseDataService from "../service/CourseDataService";

const INSTRUCTOR = "nguyentrinhan"

export const ListCoursesComponent = (props) => {
    const [state, setState] = useState({
        courses: [],
        message: null
    });

    useEffect(
        () => {
            refreshCourses()
        }
    );

    const refreshCourses = () => {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
        .then(
            response => {
                console.log(response);
                setState({ courses: response.data })
            }
        )
    }

    const addCourseClicked = () => {
        props.history.push(`course/-1`);
    }

    const updateCourseClicked = (id) => {
        props.history.push(`/course/${id}`)
    }

    const deleteCourseClicked = (id) => {
        CourseDataService.deleteCourse(INSTRUCTOR, id).then(
            response => {
                this.setState({ message: `Delete of course ${id} Successful` });
                this.refreshCourses()
                this.props.history.push(`/courses`)
            }
        )
    }

    return (
        <div className="container">
            <h3>All Courses</h3>
            {state.message && <div class="alert alert-success">{state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.courses.map(
                                courses =>
                                    <tr key={courses.id} >
                                        <td>{courses.id}</td>
                                        <td>{courses.description}</td>
                                        <td><button className="btn btn-warning" onClick={() => {
                                            if (window.confirm(`Are you sure you want to delete ${courses.id} ?`)) {
                                                deleteCourseClicked(courses.id)
                                                alert(`Delete of course ${courses.id} Successful`)
                                            }
                                        }}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateCourseClicked(courses.id)}>Update</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={addCourseClicked}>Add</button>
                </div>
            </div>
        </div>
    )
}
