package com.nhan.demoreact.core.entity;

import lombok.*;

public class Course {
    private long id;
    private String username;
    private String description;

    public Course() {
    }

    public Course(long id, String username, String description) {
        this.id = id;
        this.username = username;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

