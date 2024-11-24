package com.twitchclone.api.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Data
@EqualsAndHashCode
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private int followers;

    public Subscription() {
    }

    public Subscription(String name, String category, int followers) {
        this.name = name;
        this.category = category;
        this.followers = followers;
    }
}