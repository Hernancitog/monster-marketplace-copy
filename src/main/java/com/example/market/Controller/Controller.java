package com.example.market.Controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.example.market.Entity.Category;
import com.example.market.Entity.Listing;
import com.example.market.Service.CategoryService;
import com.example.market.Service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.market.Entity.Member;
import com.example.market.Entity.Product;
import com.example.market.Service.MemberService;
import com.example.market.Service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/product-api")
public class Controller {
	@Autowired
	ProductService productService;

	@Autowired
	ListingService listingService;

	@Autowired
	CategoryService categoryService;

	@Autowired
	MemberService memberService;

    @RequestMapping(method= RequestMethod.GET)
    public List<Product> getAllProducts(){
        List<Product> items = productService.getAllProducts();
        if(items.size() == 0){
            System.out.println("Empty list");
        }else{
            System.out.println(items.toString());
            System.out.println("Something in the list");
        }
        return items;
    }

    @GetMapping(value="/allListings")
    public List<Listing> getAllListings(){
        List<Listing> items = listingService.getAll();
        if(items.size() == 0){
            System.out.println("Empty list");
        }else{
            System.out.println("Something in the list");
        }
        return items;
    }

	// TESTING FOR ANGULAR REQUESTS & GETTING A SINGLE LISTING
	@GetMapping(value = "/listing/{id}")
	public ResponseEntity<Listing> getOneListing(@PathVariable Integer id) {
		System.out.println("Retrieving a new listing");
		Listing item = listingService.getListing(id);

		if (item == null) {
			return new ResponseEntity<Listing>((Listing) null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Listing>(item, HttpStatus.OK);
		}
	}

	@GetMapping(value = "/members")
	public List<Member> getAllMembers() {
		List<Member> items = memberService.getAllMembers();
		if (items.size() == 0) {
			System.out.println("Empty list");
		} else {
			System.out.println(items.toString());
			System.out.println("Something in the list");
		}
		return items;
	}

	@GetMapping(value = "/categories")
	public List<Category> getAllCategories() {
		List<Category> items = categoryService.getAllCategories();
		if (items.size() == 0) {
			System.out.println("Empty list");
		} else {
			System.out.println(items.toString());
			System.out.println("Something in the list");
		}
		return items;
	}

	@PostMapping(value = "/product")
	public void addProduct(@RequestBody Product item, HttpServletResponse resp) {
		System.out.println("Called post to create Product");
		productService.createProduct(item);
		resp.setStatus(201); // Created
	}

	@PostMapping(value = "/member")
	public void addMember(@RequestBody Member item, HttpServletResponse resp) {
		System.out.println("Called post to create Member");
		memberService.createMember(item);
		resp.setStatus(201); // Created
	}

	@PostMapping(value = "/category")
	public void addCategory(@RequestBody Category item, HttpServletResponse resp) {
		System.out.println("Called post to create Category");
		categoryService.createCategory(item);
		resp.setStatus(201); // Created
	}

	@GetMapping(value = "/product/{id}")
	public ResponseEntity<Product> getListing(@PathVariable Integer id) {
		Product item = productService.getProduct(id);

		if (item == null) {
			return new ResponseEntity<>((Product) null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(item, HttpStatus.OK);
		}
	}

    @GetMapping(value = "/product/seller/{id}")
    public ResponseEntity<List<Product>> getBySeller(@PathVariable Integer id) {
		Member seller = memberService.getMember(id);
        List<Product> items = productService.getProductBySeller(seller);

        if (items == null) {
            return new ResponseEntity<List<Product>>((List<Product>) null, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<List<Product>>(items, HttpStatus.OK);
        }
    }

	@GetMapping(value = "/product/category/{id}")
	public ResponseEntity<List<Product>> getByCategory(@PathVariable Integer id) {
		Category cat = categoryService.getCategory(id);
		List<Product> items = productService.getProductByCategory(cat);

		if (items == null) {
			return new ResponseEntity<List<Product>>((List<Product>) null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<List<Product>>(items, HttpStatus.OK);
		}
	}

	@GetMapping(value = "/member/{id}")
	public ResponseEntity<Member> getMember(@PathVariable Integer id) {
		Member item = memberService.getMember(id);

		if (item == null) {
			return new ResponseEntity<>((Member) null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(item, HttpStatus.OK);
		}
	}

	@GetMapping(value = "/category/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable Integer id) {
		Category item = categoryService.getCategory(id);

		if (item == null) {
			return new ResponseEntity<>((Category) null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(item, HttpStatus.OK);
		}
	}

	@DeleteMapping(value = "/product/{id}")
	public void deleteListing(@PathVariable Integer id) {
		productService.deleteProduct(id);
	}

	@DeleteMapping(value = "/member/{id}")
	public void deleteMember(@PathVariable Integer id) {
		memberService.deleteMember(id);
	}
	
	@DeleteMapping(value = "/category/{id}")
	public void deleteCategory(@PathVariable Integer id) {
		categoryService.deleteCategory(id);
	}

	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateListing(@PathVariable Integer id, @RequestBody Product item) {
		if (id != item.getId()) {
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
		productService.updateProduct(item);
		return new ResponseEntity<Product>(HttpStatus.NO_CONTENT);
	}

	@PutMapping("/member/{id}")
	public ResponseEntity<Member> updateMember(@PathVariable Integer id, @RequestBody Member item) {
		if (id != item.getId()) {
			return new ResponseEntity<Member>(HttpStatus.BAD_REQUEST);
		}
		memberService.updateMember(item);
		return new ResponseEntity<Member>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/category/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category item) {
		if (id != item.getId()) {
			return new ResponseEntity<Category>(HttpStatus.BAD_REQUEST);
		}
		categoryService.updateCategory(item);
		return new ResponseEntity<Category>(HttpStatus.NO_CONTENT);
	}
}
