package com.example.market.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.example.market.Dao.MemberDao;
import com.example.market.Entity.Category;
import com.example.market.Entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.market.Dao.ProductDao;
import com.example.market.Entity.Product;

@Service
@Transactional
public class ProductService {
	@Autowired
	ProductDao dao;

	@Transactional
	public Product getProduct(Integer id) {
		// return dao.getOne(id) can potentially return null and throw an
		// exception
		// Using Optional is a better method of handling a null value from the
		// database
		Optional<Product> item = dao.findById(id);
		if (item.isPresent()) {
			return item.get();
		} else {
			return null;
		}
	}

	@Transactional
	public List<Product> getAllProducts() {
		return dao.findAll();
	}

	@Transactional
	public List<Product> getProductBySeller(Member seller) {
		return dao.findBySeller(seller);
	}

	@Transactional
	public List<Product> getProductByCategory(Category cat) {
		return dao.findByCategory(cat);
	}

	@Transactional
	public void deleteProduct(Integer id) {

		dao.deleteById(id);
	}

	@Transactional
	public Integer updateProduct(Product item) {
		Optional<Product> product = dao.findById(item.getId());

		try {
			if (product.isPresent()) {
				if (product.get().equals(item)) {
					return 204;
				} else {
					System.out.println("updated");
					if (item.getBuyer() == null ) {
						item.setBuyer(product.get().getBuyer());
					}
					if (item.getCategory() == null ) {
						item.setCategory(product.get().getCategory());
					}
					if (item.getDescription() == null ) {
						item.setDescription(product.get().getDescription());
					}
					if (item.getPostDate() == null ) {
						item.setPostDate(product.get().getPostDate());
					}
					if (item.getPrice() == 0 ) {
						item.setPrice(product.get().getPrice());
					}
					if (item.getSeller() == null ) {
						item.setSeller(product.get().getSeller());
					}
					if (item.getStatus() == null ) {
						item.setStatus(product.get().getStatus());
					}
					if (item.getSubCategory() == null ) {
						item.setSubCategory(product.get().getSubCategory());
					}
					if (item.getTitle() == null ) {
						item.setTitle(product.get().getTitle());
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
	public Integer createProduct(Product item) {
		System.out.println("This is my product : " + item);
		return dao.save(item).getId();
	}

}
