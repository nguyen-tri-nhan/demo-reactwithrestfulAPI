package com.nhan.demoreact.core.service;

import com.nhan.demoreact.core.entity.Course;
import com.nhan.demoreact.core.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl {
    @Autowired
    private CourseRepository courseRepository;


    public List<Course> findAll() {
        return courseRepository.findAll(Sort.by(Sort.Direction.ASC,"id"));
    }

    public Course findById(long id){
        return courseRepository.findById(id);
    }

    public Course createOrUpdate(Course course){
        course.setUsername("nguyentrinhan");
        courseRepository.save(course);
        return course;
    }

    public Course deleteById(long id){
        courseRepository.deleteById(id);
        return null;
    }
}
