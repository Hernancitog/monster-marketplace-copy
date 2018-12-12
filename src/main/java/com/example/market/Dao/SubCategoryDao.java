/**
 *
 */
package com.example.market.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.market.Entity.SubCategory;


/**
 * @author Chuma
 *
 */
@Repository
public interface SubCategoryDao extends JpaRepository<SubCategory, Integer> {
}
