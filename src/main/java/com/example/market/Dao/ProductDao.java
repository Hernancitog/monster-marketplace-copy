/**
 * 
 */
package com.example.market.Dao;


import com.example.market.Entity.Category;
import com.example.market.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.market.Entity.Product;

import java.util.List;

/**
 * @author Chuma
 *
 */
@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {
    List<Product> findBySeller(Member seller);
    List<Product> findByCategory(Category cat);
}
