import { Component } from "react";
import CourseDataService from "../service/CourseDataService";

const INSTRUCTOR = 'nguyentrinhan'
class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
    }
    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id == -1) {
            return
        }
        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }
    render() {
        let { id, description } = this.state
        return (
            <div>
                <h3>Course</h3>
                <div>{id}</div>
                <div>{description}</div>
            </div>
        )
    }
}
export default CourseComponent