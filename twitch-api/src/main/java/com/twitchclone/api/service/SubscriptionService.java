package com.twitchclone.api.service;

import com.twitchclone.api.model.Subscription;

import java.util.List;

public interface SubscriptionService {
    Subscription create(Subscription subscription);

    Subscription update(Subscription subscription);

    void delete(Long id);

    Subscription findById(Long id);

    List<Subscription> findAll();

    List<Subscription> findByCategory(String category);

    Subscription findByName(String name);
}