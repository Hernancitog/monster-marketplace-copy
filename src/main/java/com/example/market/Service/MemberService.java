/**
 * 
 */
package com.example.market.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.market.Dao.MemberDao;
import com.example.market.Entity.Member;

/**
 * @author Chuma
 *
 */
@Transactional
@Service
public class MemberService {
	@Autowired
	MemberDao dao;
	
	@Transactional
    public Member getMember(Integer id){
        // return dao.getOne(id) can potentially return null and throw an exception
        // Using Optional is a better method of handling a null value from the databse
		Optional<Member> item = dao.findById(id);
        if(item.isPresent() ) {
            return item.get();
        } else{
            return null;
        }
    }
	
    @Transactional
    public List<Member> getAllMembers(){
        return dao.findAll();
    }
    
    @Transactional
    public void deleteMember(Integer id){

        dao.deleteById(id);
    }

    @Transactional
    public Integer updateMember(Member item){
    	Optional<Member> member = dao.findById(item.getId());

		try {
			if (member.isPresent()) {
				if (member.get().equals(item)) {
					System.out.println("got here");
					return 204;
				} else {
					System.out.println("updated");
					if (item.getAddress() == null ) {
						item.setAddress(member.get().getAddress());
					}
					if (item.getEmail() == null ) {
						item.setEmail(member.get().getEmail());
					}
					if (item.getFirstName() == null ) {
						item.setFirstName(member.get().getFirstName());
					}
					if (item.getLastName() == null ) {
						item.setLastName(member.get().getLastName());
					}
					if (item.getPassword() == null ) {
						item.setPassword(member.get().getPassword());
					}
					if (item.getPhone() == null ) {
						item.setPhone(member.get().getPhone());
					}
					if (item.getUsername() == null ) {
						item.setUsername(member.get().getUsername());
					}
					
					dao.save(item);
					return 200;
				}
			} else {
				createMember(item);
				return 201;
			}
		} catch (Exception e) {
			return 409;
		}
    }

    @Transactional
    public Integer createMember(Member item){
        System.out.println("This is my member : " + item);
        return dao.save(item).getId();
    }
}
