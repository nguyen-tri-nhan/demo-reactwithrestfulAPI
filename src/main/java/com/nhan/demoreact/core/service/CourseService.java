package com.nhan.demoreact.core.service;

import com.nhan.demoreact.core.entity.Course;
import com.nhan.demoreact.core.web.dto.CourseDto;

public interface CourseService {
    Course save(CourseDto courseDto);
}
