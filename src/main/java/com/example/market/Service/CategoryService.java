/**
 * 
 */
package com.example.market.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.market.Dao.CategoryDao;
import com.example.market.Entity.Category;

/**
 * @author Chuma
 *
 */
@Service
@Transactional
public class CategoryService {
	@Autowired
	CategoryDao dao;
	
	@Transactional
	public Category getCategory(Integer id) {
		// return dao.getOne(id) can potentially return null and throw an
		// exception
		// Using Optional is a better method of handling a null value from the
		// database
		Optional<Category> item = dao.findById(id);
		if (item.isPresent()) {
			return item.get();
		} else {
			return null;
		}
	}
	
	@Transactional
	public List<Category> getAllCategories() {
		return dao.findAll();
	}
	
	@Transactional
	public void deleteCategory(Integer id) {

		dao.deleteById(id);
	}
	
	@Transactional
	public Integer updateCategory(Category item) {
		Optional<Category> category = dao.findById(item.getId());

		try {
			if (category.isPresent()) {
				if (category.get().equals(item)) {
					System.out.println("\n\n\n"+category.get().toString()+"\n\n\n");
					return 204;
				} else {
					System.out.println("updated");
					if (item.getName() == null ) {
						item.setName(category.get().getName());
					}
					
					dao.save(item);
					return 200;
				}
			} else {
				return 400;
			}
		} catch (Exception e) {
			return 400;
		}
	}
	
	@Transactional
	public Integer createCategory(Category item) {
		System.out.println("This is my category : " + item);
		return dao.save(item).getId();
	}
}
