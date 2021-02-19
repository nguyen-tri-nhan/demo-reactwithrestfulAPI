package com.nhan.demoreact.core.web.controller;

import com.nhan.demoreact.core.entity.Course;
import com.nhan.demoreact.core.service.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:8081","http://192.168.232.1:8081"})
@RestController
public class CourseResourceController {

    @Autowired
    private CourseServiceImpl courseServiceImpl;

    @GetMapping("/ins/{username}/courses")
    public List<Course> getAllCourses(@PathVariable String username){
        return courseServiceImpl.findAll();
    }

    @DeleteMapping("/ins/{username}/courses/delete/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id){
        courseServiceImpl.deleteById(id);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/ins/{username}/course/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id, @RequestBody Course course){
        Course courseUpdated = courseServiceImpl.createOrUpdate(course);
        return new ResponseEntity<Course>(courseUpdated, HttpStatus.OK);
    }

    @PostMapping("/ins/{username}/course")
    public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course){
        Course createdCourse = courseServiceImpl.createOrUpdate(course);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/ins/{username}/course/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable long id){
        return courseServiceImpl.findById(id);
    }
}
