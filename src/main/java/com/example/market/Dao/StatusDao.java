/**
 *
 */
package com.example.market.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.market.Entity.Status;


/**
 * @author Chuma
 *
 */
@Repository
public interface StatusDao extends JpaRepository<Status, Integer> {
}
