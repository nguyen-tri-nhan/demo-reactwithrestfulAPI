import axios from "axios";

const INSTRUCTOR = "nguyentrinhan"
const COURSE_API_URL = "http://localhost:8080"
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/ins/${INSTRUCTOR}`

class CourseDataService {
    retrieveAllCourses(name){
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }
    deleteCourse(name, id){
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/delete/${id}`)
    }
}

export default new CourseDataService()