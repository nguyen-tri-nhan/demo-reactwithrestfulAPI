package com.nhan.demoreact.core.repository;

import com.nhan.demoreact.core.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findById(long id);
}
