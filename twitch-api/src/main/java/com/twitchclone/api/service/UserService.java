package com.twitchclone.api.service;

import com.twitchclone.api.model.User;

import java.util.List;

public interface UserService {
    User create(User user);

    User update(User user);

    void delete(Long id);

    User findById(Long id);

    List<User> findAll();

    User findByUsername(String username);

    User getCurrentUser();
}