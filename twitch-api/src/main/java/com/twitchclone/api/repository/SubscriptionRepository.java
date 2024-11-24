package com.twitchclone.api.repository;

import com.twitchclone.api.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByCategory(String category);

    Subscription findByName(String name);

    void deleteByName(String name);
}