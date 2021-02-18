package com.nhan.demoreact.core.service;

import com.nhan.demoreact.core.entity.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

@Service
public class CourseHardCodeService {
    private static Hashtable<Long,Course> courses = new Hashtable<>();
    private static long idCounter = 0;

    static {
        courses.put(++idCounter,new Course(idCounter, "nguyentrinhan", "Learn react"));
        courses.put(++idCounter,new Course(idCounter, "nguyentrinhan", "Learn spring"));
        courses.put(++idCounter,new Course(idCounter, "nguyentrinhan", "Learn both"));
    }
    public List<Course> findAll() {
        return new ArrayList<Course>(courses.values());
    }

    public Course findById(long id){
        return courses.get(id);
    }

    public Course deleteById(long id){
        Course course = findById(id);
        if (course == null) return null;
        if (courses.remove(course.getId(), course)){
            return course;
        }
        return null;
    }
}
