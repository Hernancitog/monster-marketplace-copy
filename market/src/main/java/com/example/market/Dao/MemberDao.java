/**
 *
 */
package com.example.market.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.market.Entity.Member;

/**
 * @author Chuma
 *
 */
@Repository
public interface MemberDao extends JpaRepository<Member, Integer> {
}
