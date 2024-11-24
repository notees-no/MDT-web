package com.twitchclone.api.service.impl;

import com.twitchclone.api.model.Subscription;
import com.twitchclone.api.repository.SubscriptionRepository;
import com.twitchclone.api.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Override
    public Subscription create(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription update(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    @Override
    public void delete(Long id) {
        subscriptionRepository.deleteById(id);
    }

    @Override
    public Subscription findById(Long id) {
        return subscriptionRepository.findById(id).orElse(null);
    }

    @Override
    public List<Subscription> findAll() {
        return subscriptionRepository.findAll();
    }

    @Override
    public List<Subscription> findByCategory(String category) {
        return subscriptionRepository.findByCategory(category);
    }

    @Override
    public Subscription findByName(String name) {
        return subscriptionRepository.findByName(name);
    }
}