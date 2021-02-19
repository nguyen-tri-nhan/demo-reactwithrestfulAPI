import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ListCoursesComponent } from "./ListCoursesComponent";
import { CourseComponent } from "./CourseComponent";
function InstructorApp() {
    return (
        <Router>
            <>
                <h1>Instructor Application</h1>
                <Switch>
                    <Route path="/" exact component={ListCoursesComponent} />
                    <Route path="/courses" exact component={ListCoursesComponent} />
                    <Route path="/course/:id" component={CourseComponent} />
                </Switch>
            </>
        </Router>
    )
}
export default InstructorApp