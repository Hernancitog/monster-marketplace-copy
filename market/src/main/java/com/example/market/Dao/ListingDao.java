package com.example.market.Dao;

import com.example.market.Entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListingDao extends JpaRepository<Listing, Integer> {
}
