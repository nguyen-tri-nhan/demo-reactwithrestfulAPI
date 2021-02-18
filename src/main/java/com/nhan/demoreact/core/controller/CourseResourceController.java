package com.nhan.demoreact.core.controller;

import com.nhan.demoreact.core.entity.Course;
import com.nhan.demoreact.core.service.CourseHardCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Hashtable;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:8081"})
@RestController
public class CourseResourceController {

    @Autowired
    private CourseHardCodeService courseHardCodeService;

    @GetMapping("/ins/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username){
        return courseHardCodeService.findAll();
    }

    @DeleteMapping("/ins/{username}/courses/delete/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id){
        Course course = courseHardCodeService.deleteById(id);
        if (course != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/ins/{username}/course/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable long id){
        return courseHardCodeService.findById(id);
    }
}
