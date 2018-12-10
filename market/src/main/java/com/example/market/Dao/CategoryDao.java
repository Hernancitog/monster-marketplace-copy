/**
 *
 */
package com.example.market.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.market.Entity.Category;


/**
 * @author Chuma
 *
 */
@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {
}
